



export function getAllNotes (req, res) {
    res.status(200).send("You just fetched the notes");
};

export function createNote (req, res) {
    res.status(200).json("Note created successfully");
};

export function updateNote (req, res) {
    res.status(200).json({message: "You have updated data within the database using the API method 'put' "})

};

export function deleteNote (req, res) {
    res.status(200).send({message: "You just deleted data from the database using the API method 'delete'"})

};