// build your server here and require it from index.js
const express = require('express')
const helmet = require('helmet');
const morgan = require('morgan')
const projectRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')
const server = express()

server.use(helmet());
server.use(express.json());

server.use(morgan('dev'));


server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', taskRouter)

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
      message: err.message,
      stack: err.stack,
    });
  });

  module.exports = server;
