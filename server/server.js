import express from "express";

const app = express();

app.get("/api/notes", (req, res) => {
    res.send("you got 5 notes");
});

app.post("/api/notes", (req,res) => { 
    res.status(201).send({message:"post has been created successfully"})
});

app.update("/api/notes", (req,res) => { 
    res.status(20).send({message:"post has been updated successfully"})
});


app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
});
