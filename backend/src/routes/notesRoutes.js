const express = require('express');

const { getAllNotes, getNote, createNotes, editNotes, deleteNotes } = require('../controllers/notesController');

const notesRoutes = express.Router();



notesRoutes.post('/create', createNotes);

notesRoutes.put('/edit/:id', editNotes);

notesRoutes.delete('/delete/:id', deleteNotes);

notesRoutes.get('/:id', getNote);

notesRoutes.get('/', getAllNotes);

module.exports = notesRoutes;