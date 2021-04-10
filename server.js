const express = require("express");
const path = require("path");
const fs = require("fs");
const uuid = require("uuid");

const app = express();

var PORT = process.env.PORT || 3001;

// Middleware
app.use(express.static(__dirname + '/Develop/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "Develop/public/index.html"));
});

//show notes page
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "Develop/public/notes.html"));
  });

// Send the JSON data containing the notes to be displayed at route /api/notes
app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "Develop/db/db.json"));  
  });

// Add a note to the db.json file
app.post("/api/notes", function(req, res) {
// Store the body of the request from a frontend in a variable
var newNote = req.body;
// Add a unique id to the object to be able to easily access from the db
newNote.id = uuid.v4();

// Add the new note to the db.json file
fs.readFile("Develop/db/db.json", function(err, data) {
    // First have to change the format back into a JS array
    var notesArr = JSON.parse(data);
    notesArr.push(newNote);
    fs.writeFile("Develop/db/db.json", JSON.stringify(notesArr), function(err) {
    err
    ? console.log(err)
    : console.log("Note successfully added to file.")
    });
});
 // Send the newly created note to be displayed on route /api/notes
 res.json(newNote);
});