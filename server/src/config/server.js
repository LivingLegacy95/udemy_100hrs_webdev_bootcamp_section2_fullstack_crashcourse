import express from "express";
import notesRoutes from "../routes/notesRoutes.js"
import { connectDB } from "../mongoose.config.js"
import dotenv from "dotenv";
import rateLimiter from "./../middleware/rateLimiter.js";
import cors from "cors"
import path from "path";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001 // is best convention to put your port number in the .env file and create a variable for the PORT.

const __dirname = path.resolve()
// it is best convention to connect to your database only after starting the application; console log for app.listen appears before connect.db() it should be vice versa.
// connectDB();

// middleware needed to read data from json: allows access to req.body

app.use(express.json());
// default for allowing traffic from any URL
// app.use(cors());

// explicitly allowing traffic from a specific URL 
// if statement is telling compiler if we are in production (explicitly defined in .env) to serve the application to the client through the entry point of the server side host
if (process.env.NODE_ENV !== "production") {
    app.use(cors({
        origin: "http://localhost:5173"         // frontend root url, if more than one would need to be an array.
    }))
}
// example of a custom middleware function
// app.use((req, res, next) =>{
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//     next();
// })
// cors method needs to go before ratelimiter for the server to send the intended 429 error for too many reuqests.
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")))

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, ".. /client", 'dist', 'index.html'))
    });
}

console.log(process.env.MONGO_URI) // returns undefined in terminal unless you import 'dotenv'


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT);
    });
})


// mongodb+srv://kgreene012_db_user:AKJACiU0Fs1PRdEF@cluster0.dha3yza.mongodb.net/?appName=Cluster0
