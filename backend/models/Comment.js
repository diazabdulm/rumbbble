const { Schema, model } = require("mongoose");

const Comment = new Schema({
  content: String,
  date: Date,
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

model("comments", Comment);
