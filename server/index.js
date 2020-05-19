
const express = require("express");
const app = express();
const port = 4000;
const passport = require("passport");
// QUESTION: why was this imported in the tutorial?
const passportSetup = require("./config/passport-setup");
// const session = require("express-session");
const authRoutes = require("./routes/auth");
const keys = require("./config/keys");
const cors = require("cors");

// initalize passport
app.use(passport.initialize());

// set up cors to allow us to accept requests from our client
app.use(
  cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  })
);

// set up routes
app.use("/auth", authRoutes);

const authCheck = (req, res, next) => {
  next();
};

app.get("/", authCheck, (req, res) => {
  res.status(200)
});

// connect react to nodejs express server
app.listen(port, () => console.log(`Server is running on port ${port}!`));