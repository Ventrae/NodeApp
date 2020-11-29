const express = require("express");
const path = require("path");

const styledRotues = express.Router();

styledRotues.get("/styled", (req, res, next)=>{
    res.sendFile(path.join(__dirname, "../", "views", "styled.html"));
});

module.exports = styledRotues;
