const mongoose = require("mongoose");

const db = require('../../dbs.js')

const model = db.MONGO_DB.model(
    "matche", // mongodb auto adds a "s" to name of each collection hence - matche + "s"
    new mongoose.Schema({
        id: { type: String },
        createdAt: { type: Date },
        createdBy: {
            userid: { type: String }, // Foreign Key
        },
        tournament: {
            id: { type: String }, // Foreign Key
        },
        team1: {
            id: { type: String }, // Foreign Key
        },
        team2: {
            id: { type: String }, // Foreign Key
        },

        startDate: { type: Date },
        score: {
            team1Score: { type: Number },
            team2Score: { type: Number },
            winnerTeamId: { type: String }, // Team Id - Foreign Key 
        },

        format: {
            bestof: { type: Number } // Bo1, Bo3, Bo5
        },

        completed: { type: Boolean } // True - Completed , False - not started/ongoing
    })
)

module.exports = model