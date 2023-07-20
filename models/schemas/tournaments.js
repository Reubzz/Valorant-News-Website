const mongoose = require("mongoose");

const db = require('../../dbs.js')

const model = db.MONGO_DB.model(
    "tournament", // mongodb auto adds a "s" to name of each collection hence - tournament + "s" = tournaments
    new mongoose.Schema({
        id: { type: String },
        name: { type: String },
        logoURL: { type: String },
        prizepool: { type: String },

        startDate: { type: Date },
        endDate: { type: Date },

        organizer: { type: String }, // Possible Foreign Key in future

        location: { type: String }, // Online / Offline / Irl Location
        createdAt: { type: Date },
        createdBy: {
            userid: { type: String },
        },
        links: { type: Object }, // Array of Links. 

        teams: {
            // All foreign keys 
            invited: { type: Array }, // Array of team ids - from team collection 
            playing: { type: Array }, // Array of team ids - from team collection 
            disqualified: { type: Array }, // Array of team ids - from team collection 
        }
    })
)


module.exports = model;