
import Note from './../models/Note.js';

export async function getAllNotes (req, res) {
    try {
        const notes = await Note.find()
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error is in getAll function from controller", error)
        res.status(500).json({message:"Internal server Error"})
        
    };
};

export async function createNote (req, res) {
    try {
        const {title,content} = req.body
        console.log(title,content)
        const note = new Note({title:title, content: content})
        await note.save
        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.error("Error is in createNote function from controller", error)
        res.status(500).json({message:"Internal server Error"})
    };
};

export async function updateNote (req, res) {
    try {
        const {title,content}=req.body
        await Note.findByIdAndUpdate(req.params.id, {title, content})
            res.status(200).json({message: "You have updated data within the database using the API method 'put' "})
        
    } catch (error) {
        console.error("Error is in updateNote function from controller", error)
        res.status(500).json({message:"Internal server Error"})
    }

};

export function deleteNote (req, res) {
    res.status(200).send({message: "You just deleted data from the database using the API method 'delete'"})

};