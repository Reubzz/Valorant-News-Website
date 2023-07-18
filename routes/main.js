// Imports
const express = require('express')
const router = express.Router()
const path = require('path')

// Config files
const config = require("../config.json");

// Databases


router.get("/", async (req, res) => {
    res.status(200).render("home/home.ejs", {
        // matchesData: ,
        // tournamentsData: ,
        // blogsData: 
    })
})



// 404 Page
router.get("*", (req, res) => {
    // res.status(404).sendFile(path.join(__dirname, "../pages/<pagehere>"));
    res.status(404).send("404 page not found")
});

module.exports = router;
