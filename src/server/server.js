const express = require('express');
const server = express();
const routes = require (`../routes/auth.routes`);

server.use (`/`, routes);

module.exports = server;