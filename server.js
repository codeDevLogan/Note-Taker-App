const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');

const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes/notesAPI');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(htmlRoutes);
app.use(apiRoutes);

app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)
);