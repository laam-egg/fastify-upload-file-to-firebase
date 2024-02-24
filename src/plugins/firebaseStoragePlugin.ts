import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { FIREBASE_CLOUD_STORAGE_BUCKET_NAME, FIREBASE_CLOUD_STORAGE_KEY_FILENAME } from "@/utils/env";
import { Storage } from "@google-cloud/storage";
import fp from "fastify-plugin";

export const firebaseStoragePlugin = fp(async (server: FastifyInstance, options: FastifyPluginOptions) => {
    const firebaseStorage = new Storage({
        keyFilename: FIREBASE_CLOUD_STORAGE_KEY_FILENAME,
    });
    
    const firebaseStorageBucket = firebaseStorage.bucket(FIREBASE_CLOUD_STORAGE_BUCKET_NAME);

    server.decorate('firebaseStorage', firebaseStorage);
    server.decorate('firebaseStorageBucket', firebaseStorageBucket);
});
