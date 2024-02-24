import { type Bucket, type Storage } from "@google-cloud/storage";
import fastify from "fastify";

declare module 'fastify' {
    export interface FastifyInstance<
        HttpServer = Server,
        HttpRequest = IncomingMessage,
        HttpResponse = ServerResponse,
    > {
        firebaseStorage: Storage,
        firebaseStorageBucket: Bucket,
    }

    export interface FastifyRequest {

    }
}
