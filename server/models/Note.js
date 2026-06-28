import mongoose from 'mongoose';
import { kStringMaxLength } from './../node_modules/@types/node/buffer.d';

// 1 create a schema

//2 create model based off that schema

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    content:{
        type:String,
        required: true,
    },
    },
    { timestamps: true} // generates createAt, and updatedAt
);

const Note = mongoose.model("Note", noteSchema)

export default Note