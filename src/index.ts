import { Storage } from "@google-cloud/storage";
import { FIREBASE_CLOUD_STORAGE_BUCKET_NAME, FIREBASE_CLOUD_STORAGE_KEY_FILENAME } from "./utils/env";

async function main() {
    const storage = new Storage({
        keyFilename: FIREBASE_CLOUD_STORAGE_KEY_FILENAME,
    });
    
    const storageBucket = storage.bucket(FIREBASE_CLOUD_STORAGE_BUCKET_NAME);
    
    const file = storageBucket.file(`RandomDir/RandomFile.txt`);
    const ws = file.createWriteStream();
    await new Promise((resolve, reject) => {
        ws.write("ABCDEF", (err) => {
            if (err) {
                reject(err);
            } else {
                ws.end(() => resolve(null));
            }
        });
    });
    await file.makePublic();
    console.log(file.publicUrl());
}

main();
