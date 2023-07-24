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

// Data Constructor Functions
const buildMatchData = require('../models/functions/constructors/matchData.js');
const buildTournamentData = require('../models/functions/constructors/tournamentData.js');

router.get("/", async (req, res) => {
    res.status(200).render("home/home.ejs", {
        matchesData: await buildMatchData(),
        tournamentsData: await buildTournamentData(),
        // blogsData: 
    })
})

router.get('/matches', async (req, res) => {
    res.status(200).render("home/matches.ejs", {
        matchesData: await buildMatchData(),
        tournamentsData: await buildTournamentData(),
    })
    // res.send(await buildMatchData())
})


// 404 Page
router.get("*", (req, res) => {
    // res.status(404).sendFile(path.join(__dirname, "../pages/<pagehere>"));
    res.status(404).send("404 page not found")
});

module.exports = router;
