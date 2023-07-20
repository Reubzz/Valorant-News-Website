require("dotenv").config();
const express = require("express");
const path = require("path");
const config = require("./config.json");
const cookieParser = require("cookie-parser");


const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/test', require(path.join(__dirname, "/tests/testroute.js")));
app.use('/', require(path.join(__dirname, "/routes/main.js")));


app.listen(process.env.PORT, () => {
    console.log(`App Listening at http://localhost`)
});