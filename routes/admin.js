const express = require("express");
const path = require("path");

const router = express.Router();

const posts = [];

router.get("/create", (req, res) => {
    res.render("addPost", {title: "Create Post"})
    // res.sendFile(path.join(__dirname, ".." , "views" , "addPost.html"))
})

router.post("/", (req, res) => {
    const {title, description} = req.body;
    console.log(`Title value is ${title} & description is ${description}`);
    posts.push({
        title, description
    })
    console.log(posts);
    
    res.redirect("/"); 
    })

module.exports = {adminRoutes :router, posts}