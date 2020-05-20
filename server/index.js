
const express = require("express");
const app = express();
const port = 3000;
const passport = require("passport");
const session = require("express-session");
// const authRoutes = require("./routes/auth");
// const keys = require("./config/keys");
const cors = require("cors");
const TwitterStrategy = require("passport-twitter");
// const router = new express.Router();
const BASE_URL = process.env.FRONT_END_URL || "http://localhost:3002";

const TWITTER_API_KEY =  "1YFhuK8QhZHjeonqUroQWhOCc";
const TWITTER_SECRET_KEY =  "eeXi5sjaqRpEb4POZdvxSLYbB34oy8DeDY3fKupPIufqcrg2yb";
const TWITTER_CALLBACK_URL =  " http://localhost:3000/oauth/twitter/callback";


// initalize passport
app.use(passport.initialize());

app.use(session({ secret: "SECRET", resave: false, saveUninitialized: false })); // required for passport

app.use(passport.session());

// set up cors to allow us to accept requests from our client
app.use(
  cors(/**{
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  }*/)
);


/**
 * Twitter Stategy setup
 * console logs token, token secret, and profile upon authentication through Twitter.
 */
passport.use(
  new TwitterStrategy(
    {
      consumerKey: TWITTER_API_KEY,
      consumerSecret: TWITTER_SECRET_KEY,
      callbackURL: TWITTER_CALLBACK_URL,
    },
    function (token, tokenSecret, profile, done) {
      // these tokens last for 15 years or until revoked, so we’re prob good for now
      console.log("In TwitterStrategy");
      console.log("TOKEN!", token);
      console.log("TOKEN SECRET!", tokenSecret);
      console.log("PROFILE!", profile);
      // QUESTION: what does "done" do? is it similar to an error handler?
      // once i get the things => error first callback pattern
      done(null, {}); // null goes to Success?
      // will want to check if user is who they say they are THEN redirect in production
    })
);


/**
 * Auth Routes pulled from LiveStack
 * */
app.get(
  "/auth/twitter",
  passport.authenticate("twitter", { session: false })
);

app.get(
  "/oauth/twitter/callback",
  passport.authenticate("twitter", { session: false }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect(`${BASE_URL}/`);
  }
);




// const authCheck = (req, res, next) => {
//   next();
// };

// app.get("/", authCheck, (req, res) => {
//   res.status(200)
// });

// connect react to nodejs express server
app.listen(port, () => console.log(`Server is running on port ${port}!`));
