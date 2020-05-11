const { Schema, model } = require("mongoose");

const Post = new Schema({
  name: String,
  likes: Number,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

model("posts", Post);
