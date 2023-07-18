const mongoose = require("mongoose");

const db = require('../../dbs.js')

const model = db.MONGO_DB.model(
    "team", // mongodb auto adds a "s" to name of each collection hence - team + "s" = teams
    new mongoose.Schema({
        id: { type: String },
        createdAt: { type: Date },
        createdBy: {
            userid: { type: String }, // Foreign Key - from users collection
        },
        name: { type: String },
        country: { type: String },
        bannerURL: { type: String },
        logoURL: { type: Array },
        url: { type: String },

        members: {
            // All Foreign Keys - from players collection
            owners: { type: Array }, // Array of Player IDs
            managers: { type: Array }, // Array of Player IDs
            players: { type: Array }, // Array of Player IDs
            substitutes: { type: Array }, // Array of Player IDs
            coaches: { type: Array }, // Array of Player IDs
        },

        totalWinnings: { type: Number },
        totalWins: { type: Number },
        totalLoss: { type: Number },
        links: { type: Array }, // Array of Links 
    })
)


module.exports = model;