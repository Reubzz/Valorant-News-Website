// Imports
const express = require('express')
const router = express.Router()

const generateId = require('../models/functions/uniqueID.js')

// Temp Import
const testData = require('../tests/dbTest.js')

router.get('/', (req, res) => {
    res.status(200).send('Available Routes - /match-data - /tournament-data')
})

router.get("/match-data", async (req, res) => {

    let options = {
        team1: generateId({useCase: 'team'}),
        team2: generateId({useCase: 'team'}),
        matchID: generateId({useCase: 'game'}),
        team1Score: req.query.t1Score,
        team2Score: req.query.t2Score
    }
    testData.matchesTestData({
        team1: options.team1,
        team2: options.team2,
        matchID: options.matchID,
        userID: 'user-0123456789',
        tournamentID: 'tour-0123456789',
        startDate: new Date(),
        completed: true,
        winnerTeamId: options[req.query.winTeam],
        format: 1,
        team1Score: options.team1Score,
        team2Score: options.team2Score,
    });
    res.send('done \n')
})

router.get("/tournament-data", async (req, res) => {

    let options = {
        team1: generateId({useCase: 'team'}),
        team2: generateId({useCase: 'team'}),
        matchID: generateId({useCase: 'game'}),
        team1Score: req.query.t1Score,
        team2Score: req.query.t2Score
    }
    testData.tournamentTestData({
        team1: options.team1,
        team2: options.team2,
        matchID: options.matchID,
        userID: 'user-0123456789',
        tournamentID: 'tour-0123456789',
        startDate: new Date(),
        completed: true,
        winnerTeamId: options[req.query.winTeam],
        format: 1,
        team1Score: options.team1Score,
        team2Score: options.team2Score,
    });
    res.send('done \n')
})


module.exports = router;
