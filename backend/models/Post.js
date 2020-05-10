const { Schema, model } = require("mongoose");

const Post = new Schema({
  name: String,
  likes: Number,
  date: Date,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

model("posts", Post);
