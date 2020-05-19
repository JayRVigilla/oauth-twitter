const passport = require("passport");
const TwitterStrategy = require("passport-twitter");
const keys = require("./keys");

passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.TWITTER_API_KEY,
      consumerSecret: keys.TWITTER_SECRET_KEY,
      callbackURL: keys.TWITTER_CALLBACK_URL,
    },
    function (token, tokenSecret, profile, done) {
      // these tokens last for 15 years or until revoked, so we’re prob good for now
      console.log("TOKEN!", token);
      console.log("TOKEN SECRET!", tokenSecret);
      console.log("PROFILE!", profile);
      // QUESTION: what does "done" do? is it similar to an error handler?
      // once i get the things => error first callback pattern
      done(null, {}); // null goes to Success
      // will want to check if user is who they say they are THEN redirect in production
    }  )
);