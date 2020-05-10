const app = require("express")();
const passport = require("passport");
const session = require("cookie-session");

const authRouter = require("./routes/auth");

require("./models/User");
require("./models/Post");
require("./models/Comment");
require("./models/Like");

require("mongoose").connect(process.env.MONGO_URI);
require("./services/passport");

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);

app.get("/", (request, response) => {
  console.log(request.user);
  response.send("hiya");
});

app.listen(process.env.PORT || 5000);
