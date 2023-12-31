const awsServerlessExpress = require("aws-serverless-express");
const server = require("../../dist/ui/serverless/main");
const awsServerlessExpressMiddleware  = require("aws-serverless-express/middleware");

const binaryMimeTypes = [
  "application/javascript",
  "application/json",
  "application/octet-stream",
  "application/xml",
  "image/jpeg",
  "image/png",
  "image/gif",
  "text/comma-separated-values",
  "text/css",
  "text/html",
  "text/javascript",
  "text/plain",
  "text/text",
  "text/xml",
  "image/x-icon",
  "image/svg+xml",
  "application/x-font-ttf",
  "font/ttf",
  "font/otf",
];
server.app.use(awsServerlessExpressMiddleware.eventContext());
const serverProxy = awsServerlessExpress.createServer(
    server.app,
    // @ts-ignore
    null,
    binaryMimeTypes
);
module.exports.handler = (event: any, context: any) =>
    awsServerlessExpress.proxy(serverProxy, event, context);
