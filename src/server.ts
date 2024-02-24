import fastify, { FastifyInstance } from "fastify";
import { firebaseStoragePlugin } from "@/plugins/firebaseStoragePlugin";
import fastifyMultipart from "@fastify/multipart";
import fastifyView from "@fastify/view";
import EJS from "ejs";

import { pipeline } from "node:stream";
import util from "node:util";
import createError from "@fastify/error";
const pump = util.promisify(pipeline);

const NoFileUploadedError = createError('FST_ERR_VALIDATION', "No file uploaded.", 400);

export async function createServer(): Promise<FastifyInstance> {
    const server = fastify();

    await Promise.all([
        server.register(firebaseStoragePlugin),

        server.register(fastifyMultipart),

        server.register(fastifyView, {
            engine: {
                ejs: EJS,
            },
            root: __dirname + "/templates",
        }),
    ]);

    server.post('/', async (req, res) => {
        const data = await req.file();

        if (!data) {
            throw new NoFileUploadedError();
        };

        if (!req.server.firebaseStorageBucket) {
            throw new Error("Bucket not defined");
        }
        const remoteFile = req.server.firebaseStorageBucket.file(`RandomDir/${data.filename}`);
        const ws = remoteFile.createWriteStream();
        await pump(data.file, ws);

        await remoteFile.makePublic();
        return {
            url: remoteFile.publicUrl(),
        };
    });

    server.get('/', async (req, res) => {
        return res.view("index.ejs");
    });

    return server;
}
