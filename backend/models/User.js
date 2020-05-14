const { Schema, model } = require("mongoose");

const User = new Schema({
  name: String,
  picture: String,
  biography: String,
  location: String,
  githubID: Number,
  githubUsername: String,
});

model("users", User);
