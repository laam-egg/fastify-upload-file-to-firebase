# Fastify Upload File to Firebase - Example Code

This app serves a webpage that allows
the user to select an image file to
upload to a Firebase bucket.

On success, the webpage displays the
URL of the uploaded image.

The Firebase Cloud Storage credentials
and bucket name are specified in
environment variables in `.env` file.
More detail below.

- [Fastify Upload File to Firebase - Example Code](#fastify-upload-file-to-firebase---example-code)
  - [Setup](#setup)
  - [Run the Development Server](#run-the-development-server)
  - [Deploy to Production](#deploy-to-production)

## Setup

1. Clone the project to your local machine.
2. Copy content of file `.env.example` to a
    new file named `.env`, and modify the
    environment variables as instructed.
3. Run:

    ```sh
    npm install
    ```

## Run the Development Server

```sh
npm run dev
```

## Deploy to Production

```sh
npm run build
npm run start
```
