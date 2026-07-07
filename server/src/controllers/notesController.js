
import Note from '../models/Note.js';

// CRUD function: Display

export async function getAllNotes (_, res) {
    try {
        const notes = await Note.find().sort({createdAt: -1}); // .sort is categorizing notes in order by creation
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error is in getAll function from controller", error)
        res.status(500).json({message:"Internal server Error"})
        
    };
};

// CRUD function: Read
export async function getOneNote( req, res) {
    try {
        const oneNote = await Note.findById(req.params.id);
        if (!oneNote) return res.status(404).json({message: "Node not found"});
    } catch (error) {
        console.error("Error is in getOneNote function from controller", error)
        res.status(500).json({message:"Internal server Error"})
    }
}

// CRUD function: Create
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

// CRUD function: Delete
export async function updateNote (req, res) {
    try {
        const {title,content}=req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content},{
            new: true // By default, findOneAndUpdate() returns the document as it was before update was applied. If you set new: true, findOneAndUpdate() will instead give you the object after update was applied.
        });
        if (!updatedNote) return res.status(404).json({message: "Node not found"});
        res.status(200).json({message: "You have updated data within the database using the API method 'put' "});
        
    } catch (error) {
        console.error("Error is in updateNote function from controller", error);
        res.status(500).json({message:"Internal server Error"});
    }

};

export async function deleteNote (req, res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        if (!deletedNote) return res.status(404).json({message: "Node not found"});
        res.status(200).send({message: "You just deleted data from the database using the API method 'delete'"})
    } catch (error) {
        console.error("Error is in deleteNote function from controller", error);
        res.status(500).json({message:"Internal server Error"});
    }

};