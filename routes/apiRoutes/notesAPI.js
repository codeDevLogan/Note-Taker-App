const app = require('express').Router();
const fs = require('fs');
const uuid = require('../../helpers/uuid');
const { readFromFile, writeToFile, readAndAppend } = require('../../helpers/fsUtils');
// const path = require('path');

app.get('/api/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});

app.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a review`);

    const { title, text } = req.body;

    if(title && text) {

        const newNote = {
            title,
            text,
            id: uuid()
        };

        readAndAppend(newNote, './db/db.json');
        res.json('Saved Note');
    } else {
        res.status(400).json('Error in saving note: Missing note entry. (Either body or title)');
    }
});

module.exports = app;