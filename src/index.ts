import { createServer } from "./server";

async function main() {
    const server = await createServer();

    const serverAddress = await server.listen({
        port: 3000,
    });

    console.log(`Server is listening at ${serverAddress}`);
}

main();
