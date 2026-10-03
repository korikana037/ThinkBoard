const Note = require('../models/notes');

const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find();

        res.status(200).json(notes);
    } catch (error) {
        res.status(400).send('could not fetch all notes: '+ error.message);
    }
};

const getNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if(!note){
            throw new Error ('note doesnt exist');
        }
        res.status(200).send(note)
    } catch (error) {
        res.status(400).send('could not find the notes: '+ error.message)
    }
    
}

const createNotes = async (req, res) => {
    try {
        const {title, content} = req.body;
        const newNote = new Note({title, content});
        await newNote.save();
        res.status(201).send(newNote);
    } catch (error) {
        res.status(400).send('error saving the notes: '+ error.message);
    }
};

const editNotes = async (req, res) => {
    try {
        const {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true});
        if(!updatedNote){
            throw new Error ('no notes found with that id ');
        }
        res.status(200).send(updatedNote);
    } catch (error) {
        res.status(400).send('could not upadte the notes: '+ error.message);
    }
};

const deleteNotes = async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote){
            throw new Error ('could not find the notes');
        }
        res.status(200).send('deleted notes successfully');
    } catch (error) {
        res.status(400).send('could not delete the notes: '+ error.message);
    }
}

module.exports = {
    getAllNotes,
    getNote,
    createNotes,
    editNotes,
    deleteNotes,
    
}