const express = require("express");
const passport = require("passport");
const session = require("cookie-session");
const bodyParser = require("body-parser");

const app = express();

require("./models/User");
require("./models/Post");
require("./models/Comment");
require("./models/Like");

require("mongoose").connect(process.env.MONGO_URI);
require("./services/passport");

const authRouter = require("./routes/auth");
const projectsRouter = require("./routes/projects");

app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);
app.use("/posts", projectsRouter);
app.use("/uploads", express.static("uploads"));

app.listen(process.env.PORT || 5000);
