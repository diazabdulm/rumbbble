const { Schema, model } = require("mongoose");

const Like = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

model("likes", Like);
