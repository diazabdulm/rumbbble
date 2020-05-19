const { Schema, model } = require("mongoose");

const Like = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: "posts",
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

model("likes", Like);
