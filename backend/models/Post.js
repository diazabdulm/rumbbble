const { Schema, model } = require("mongoose");

const Post = new Schema({
  title: String,
  description: String,
  repoURL: String,
  image: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

model("posts", Post);
