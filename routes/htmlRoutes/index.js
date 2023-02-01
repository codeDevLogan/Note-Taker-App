const app = require('express').Router();

const notesRouter = require('./notesRouter');

app.use(notesRouter);

module.exports = app;