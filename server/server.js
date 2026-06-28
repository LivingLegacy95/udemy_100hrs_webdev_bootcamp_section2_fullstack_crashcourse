import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import { getAllNotes } from './controllers/notesController.js';
import {connectDB} from "./mongoose.config.js"
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use("/api/notes", notesRoutes);

connectDB();

console.log(process.env.MONGO_URI) // returns undefined in terminal unless you import 'dotenv'

const PORT = process.env.PORT || 5001 // is best convention to put your port number in the .env file and create a variable for the PORT.

app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
});


// mongodb+srv://kgreene012_db_user:AKJACiU0Fs1PRdEF@cluster0.dha3yza.mongodb.net/?appName=Cluster0
