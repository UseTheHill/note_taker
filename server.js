const express = require("express");
const path = require("path");
const fs = require("fs");
const uuid = require("uuid");

const app = express();

var PORT = process.env.PORT || 3001;
