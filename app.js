"use strict";
const http = require("http");
const hostname = "127.0.0.1";
const port = 3333;

const express = require("express");
const es6Renderer = require("express-es6-template-engine");

const app = express();
const server = http.createServer(app);

app.engine("html", es6Renderer);
app.set("views", "./views");
app.set("view engine", "html");

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

const rootController = require("./routes/index");
const rangersController = require("./routes/rangers");
const router = require("./routes/index");

app.use("/", rootController);
app.use("/rangers", rangersController);
