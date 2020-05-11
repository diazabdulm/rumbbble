const { Schema, model } = require("mongoose");

const Comment = new Schema({
  content: String,
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
