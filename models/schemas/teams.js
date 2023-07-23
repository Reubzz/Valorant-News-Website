const mongoose = require("mongoose");

const db = require('../../dbs.js')

const model = db.MONGO_DB.model(
    "team", // mongodb auto adds a "s" to name of each collection hence - team + "s" = teams
    new mongoose.Schema({
        id: { type: String }, // unique primary key
        createdAt: { type: Date },
        createdBy: {
            userid: { type: String }, // Foreign Key - from users collection
        },
        name: { type: String },
        shortName: { type: String },
        country: { type: String },
        bannerURL: { type: String }, // team bannner url (shown on team page)
        logoURL: { type: String }, // team logo url 
        url: { type: String }, // unique url slug if any

        members: {
            // All Foreign Keys - from players collection
            owners: { type: Array }, // Array of Player IDs
            managers: { type: Array }, // Array of Player IDs
            players: { type: Array }, // Array of Player IDs
            substitutes: { type: Array }, // Array of Player IDs
            coaches: { type: Array }, // Array of Player IDs
        },

        totalWinnings: { type: String },
        totalWins: { type: Number },
        totalLoss: { type: Number },
        links: { type: Array }, // object of Links 
    })
)


module.exports = model;