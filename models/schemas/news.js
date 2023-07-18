const mongoose = require("mongoose");

const db = require('../../dbs.js')

const model = db.MONGO_DB.model(
    "new", // mongodb auto adds a "s" to name of each collection hence - new + "s" = news
    new mongoose.Schema({
        id: { type: String },
        createdAt: { type: Date },
        createdBy: {
            userid: { type: String }, // Foreign Key
        },
        title: { type: String },
        data: { type: String },
        bannerURL: { type: String },
        tags: { type: Array },
        url: { type: String },
    })
)


module.exports = model;