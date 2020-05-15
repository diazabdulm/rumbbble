const commentsRouter = require("express").Router();
const { model } = require("mongoose");

const Comment = model("comments");

commentsRouter.post("/", async (request, response) => {
  const { projectId, commentData } = request.body;
  const newComment = await new Comment({
    author: request.user.id,
    post: projectId,
    content: commentData,
  });
});

module.exports = commentsRouter;
