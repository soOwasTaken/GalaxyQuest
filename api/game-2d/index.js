const express = require("express");
const serverless = require("serverless-http");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../../../game-2d/www")));

module.exports = serverless(app);
