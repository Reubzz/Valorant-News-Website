const matchesSchema = require('../models/schemas/matches.js')
const tournamentSchema = require('../models/schemas/tournaments.js')
const newsSchema = require('../models/schemas/news.js')
const teamsSchema = require('../models/schemas/teams.js')
const mongoose = require('mongoose')

// const generateId = require('../models/functions/uniqueID.js')

function matchesTestData({
    team1, // String - Team ID 
    team2, // String - Team ID
    matchID, // String - Match ID 
    userID, // String - User ID 
    tournamentID, // String - Tournament ID
    startDate = new Date, // Number - Date
    winnerTeamId = null, // String - Team ID 
    completed, // Boolean
    format = 1, // Number - format - bo1 bo3 bo5 
    team1Score = 0,
    team2Score = 0,
} = {}) {

    const newSave = new matchesSchema({
        matchId: matchID,
        createdAt: new Date,
        createdBy: {
            userId: userID
        },
        tournament: {
            id: tournamentID,
        },
        team1: {
            id: team1
        },
        team2: {
            id: team2
        },
        startDate: startDate,
        score: {
            team1Score: team1Score,
            team2Score: team2Score,
            winnerTeamId: winnerTeamId
        },
        format: {
            bestof: format
        },
        completed: completed
    })
    
    newSave.save();

}    

function tournamentTestData({
    id,
    name,
    logoURL,
    prizepool,
    
    startDate, 
    endDate,

    organizer,
    location,

    createdAt,
    userID,
    links = {},
    teams = {
        invited: [],
        playing: [],
        disqualified: []
    }
} = {}) {
    const newSave = new tournamentSchema ({
        id: id,
        name: name,
        logoURL: logoURL,
        prizepool: prizepool,

        startDate: startDate,
        endDate: endDate,

        organizer: organizer, // Possible Foreign Key in future

        location: location, // Online / Offline / Irl Location
        createdAt: createdAt,
        createdBy: {
            userid: userID,
        },
        links: links, // Array of Links. 

        teams: teams
    })

    newSave.save()
}
function teamsTestData(params) {
    
}
function newsTestData(params) {
    
}

module.exports = {
    matchesTestData,
    tournamentTestData,
    teamsTestData,
    newsTestData,
};