const app = require("express")();
const passport = require("passport");
const session = require("cookie-session");
const cors = require("cors");

const authRouter = require("./routes/auth");

require("./models/User");
require("./models/Post");
require("./models/Comment");
require("./models/Like");

require("mongoose").connect(process.env.MONGO_URI);
require("./services/passport");

if (process.env.NODE_ENV === "development") {
  app.use(cors());
}

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);

app.listen(process.env.PORT || 5000);
