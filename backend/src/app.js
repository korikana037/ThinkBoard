const express = require('express');

const app = express();

const Note = require('./models/notes');
const notesRoutes = require('./routes/notesRoutes');

app.use(express.json());

app.use('/api/notes', notesRoutes);



module.exports = app;
