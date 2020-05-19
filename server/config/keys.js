const TWITTER_TOKENS = {
  TWITTER_API_KEY: "1YFhuK8QhZHjeonqUroQWhOCc",
  TWITTER_SECRET_KEY: "eeXi5sjaqRpEb4POZdvxSLYbB34oy8DeDY3fKupPIufqcrg2yb",
  TWITTER_CALLBACK_URL: " http://localhost:3000/oauth/twitter/callback",
  // access_token && token_secret were shown in tutorial.
}

// const SESSION = {
//   COOKIE_KEY: ""
// }

const KEYS = {
  ...TWITTER_TOKENS,
  // ...SESSION
}

module.exports = KEYS;