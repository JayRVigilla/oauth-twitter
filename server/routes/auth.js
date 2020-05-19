const express = require("express");
const router = new express.Router();
const passport = require("passport");
const BASE_URL = process.env.FRONT_END_URL || "http://localhost:3001";

router.get(
  "/auth/twitter",
  passport.authenticate("twitter", { session: false })
);

router.get(
  "/oauth/twitter/callback",
  passport.authenticate("twitter", { session: false }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect(`${BASE_URL}/`);
  }
);


module.exports = router;