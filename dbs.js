require("dotenv").config();
const mongoose = require('mongoose')

const MONGO_DB_URI = process.env.MONGO_URI;

mongoose.MONGO_DB = mongoose.createConnection(MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


module.exports = mongoose;