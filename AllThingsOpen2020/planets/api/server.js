#!/usr/bin/env node
//Copyright Timo Stark 2020 F5 Inc.

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

app.get('/', (req, res) => res.send('Hello from Unit Application Server for JavaScript'));

createServer(app).listen();