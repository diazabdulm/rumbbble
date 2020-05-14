const passport = require("passport");
const GithubStrategy = require("passport-github").Strategy;
const { model } = require("mongoose");

const User = model("users");

passport.serializeUser(({ id }, done) => done(null, id));

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  return done(null, user);
});

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    (
      accessToken,
      refreshToken,
      {
        _json: {
          id: githubID,
          login: githubUsername,
          name,
          location,
          avatar_url: picture,
          bio: biography,
        },
      },
      done
    ) => {
      User.findOne({ githubID }, async (error, user) => {
        try {
          if (error) return done(error);
          if (user) return done(null, user);
          const newUser = await new User({
            name,
            location,
            picture,
            biography,
            githubID,
            githubUsername,
          }).save();
          return done(null, newUser);
        } catch (error) {
          throw Error(error);
        }
      });
    }
  )
);
