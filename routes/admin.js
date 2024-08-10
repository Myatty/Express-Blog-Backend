const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/create", (req, res) => {
    res.sendFile(path.join(__dirname, ".." , "views" , "addPost.html"))
})

router.post("/", (req, res) => {
    const {title, description} = req.body;
    res.redirect("/")
    })

module.exports = router