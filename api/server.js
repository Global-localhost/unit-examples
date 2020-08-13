#!/usr/bin/env node
const routes = require('./routes.js');
const {
    createServer,
    IncomingMessage,
    ServerResponse,
} = require('unit-http');

require('http').ServerResponse = ServerResponse;
require('http').IncomingMessage = IncomingMessage;

const express = require('express');
const app = express();

routes(app);

app.get('/', (req, res) => res.send('Hello, Unit!'));

createServer(app).listen();