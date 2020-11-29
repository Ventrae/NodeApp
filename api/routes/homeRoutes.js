const express = require("express");
const path = require("path");

const homeRotues = express.Router();

homeRotues.get("/", (req, res, next)=>{
    res.sendFile(path.join(__dirname, "../", "views", "home.html"));
});

module.exports = homeRotues;
