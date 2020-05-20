const { Schema, model } = require("mongoose");

const Post = new Schema(
  {
    title: String,
    description: String,
    repoURL: String,
    demoURL: String,
    image: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

model("posts", Post);
