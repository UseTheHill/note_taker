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