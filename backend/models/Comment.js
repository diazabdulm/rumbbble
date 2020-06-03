const { Schema, model } = require("mongoose");

const Comment = new Schema(
  {
    content: String,
    post: {
      type: Schema.Types.ObjectId,
      ref: "posts",
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

model("comments", Comment);
