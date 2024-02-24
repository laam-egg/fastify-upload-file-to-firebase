import "dotenv/config";

function envKeyIsInvalidOrMissing(keyName: string): never {
    throw new Error(`Environment variable ${keyName} is invalid or missing.`);
}

export const FIREBASE_CLOUD_STORAGE_KEY_FILENAME = process.env.FIREBASE_CLOUD_STORAGE_KEY_FILENAME || envKeyIsInvalidOrMissing("FIREBASE_CLOUD_STORAGE_KEY_FILENAME");
export const FIREBASE_CLOUD_STORAGE_BUCKET_NAME = process.env.FIREBASE_CLOUD_STORAGE_BUCKET_NAME || envKeyIsInvalidOrMissing("FIREBASE_CLOUD_STORAGE_BUCKET_NAME");
