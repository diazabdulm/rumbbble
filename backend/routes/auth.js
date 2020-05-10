const authRouter = require("express").Router();
const passport = require("passport");

authRouter.get("/github", passport.authenticate("github"));

authRouter.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  (request, response) => {
    response.redirect("/");
  }
);

module.exports = authRouter;
