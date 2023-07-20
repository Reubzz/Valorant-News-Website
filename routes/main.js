// Imports
const express = require('express')
const router = express.Router()
const path = require('path')

// Config files
const config = require("../config.json");

// Databases
const matchesDB = require('../models/schemas/matches');
const tournamentsDB = require('../models/schemas/tournaments'); 
const teamsDB = require('../models/schemas/teams'); 

router.get("/", async (req, res) => {

    let  matchesData = await matchesDB.find({ completed: false });
    matchesData.forEach(async (match) => {
        match.team1.data = await teamsDB.find({ id: match.team1.id })
        match.team2.data = await teamsDB.find({ id: match.team2.id })
    })
    let tournamentsData = await tournamentsDB.find().sort({ startDate: 1})

    res.status(200).render("home/home.ejs", {
        matchesData: matchesData,
        tournamentsData: tournamentsData,
        // blogsData: 
    })
    console.log(matchesData)
    // console.log(tournamentsData)
})



// 404 Page
router.get("*", (req, res) => {
    // res.status(404).sendFile(path.join(__dirname, "../pages/<pagehere>"));
    res.status(404).send("404 page not found")
});

module.exports = router;
