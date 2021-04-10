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

  