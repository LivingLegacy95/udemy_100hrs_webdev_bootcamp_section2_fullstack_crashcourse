import express from "express"; 
import { getAllNotes, getOneNote, createNote, updateNote, deleteNote } from './../controllers/notesController.js';


const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", getOneNote);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

// this was before we created routes folder. We moved routes from server.js to this file.

// app.get("/api/notes", (req, res) => {
//     res.send("you got 5 notes");
// });

// app.post("/api/notes", (req,res) => { 
//     res.status(201).send({message:"post has been created successfully"})
// });

// app.put("/api/notes/:id", (req,res) => { 
//     res.status(20).send({message:"post has been updated successfully"})
// });

// app.delete("/api/notes/:id", (req,res) => { 
//     res.status(201).send({message:"post has been deleted successfully"})
// });

export default router