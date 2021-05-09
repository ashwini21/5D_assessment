const express = require("express");
const app = express();
const dotenv = require("dotenv");
const router = require("./routes.js");
const bodyParser = require("body-parser");
var session = require("express-session");

app.use(bodyParser.json());
dotenv.config({path: './env'})
app.use(
    session({
        key: "session_cookie_name",
        secret: "session_cookie_secret",
        resave: true,
        saveUninitialized: true
    })
);
app.use("/api",router);
app.listen(5000, () => {
    console.log("server started on port ", process.env.PORT || 5000);
})

module.exports = app;