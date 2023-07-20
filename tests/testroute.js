// Imports
const express = require('express')
const router = express.Router()
const path = require('path')
const moment = require('moment/moment.js')


const generateId = require('../models/functions/uniqueID.js')

// Temp Import
const testData = require('../tests/dbTest.js')

router.get("/", (req, res) => {
    res.status(200).send('Available Routes - /match-data - /tournament-data')
})

router.get("/match-data", async (req, res) => {

    let options = {
        team1: req.query.t1Name,
        team2: req.query.t2Name,
        matchID: generateId({useCase: 'game'}),
        team1Score: req.query.t1Score,
        team2Score: req.query.t2Score,
        completed: req.query.completed
    }
    testData.matchesTestData({
        team1: options.team1,
        team2: options.team2,
        matchID: options.matchID,
        userID: 'user-0123456789',
        tournamentID: 'tour-hiu9an1ksq',
        startDate: new Date(),
        completed: options.completed,
        winnerTeamId: options[req.query.winTeam],
        format: 1,
        team1Score: options.team1Score,
        team2Score: options.team2Score,
    });
    res.send('done \n')
})

router.get("/tournament-data", async (req, res) => {

    let options = {
        id: generateId({useCase: 'tournament'}),
        name: "Valorant Invitational",
        logoURL: "/Assets/imgs/logo.png",
        prizepool: "$ 5,000",

        startDate: new Date(),
        endDate: moment().add(10, 'days'),

        organizer: "Skyesports",
        location: "Lan",

        createdAt: new Date(),
        userID: "user-0123456789",
        links: [
            {
                instagram: "https://instagram.com",
                twitter: "https://twitter.com",
                facebook: "https://facebook.com"
            }
        ],
        teams: {
            invited: [], // array of team ids
            playing: [], // array of team ids
            disqualified: [] // array of team ids
        }
    }
    testData.tournamentTestData({
        ...options
    });
    res.send('done \n')
})


module.exports = router;
