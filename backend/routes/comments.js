const commentsRouter = require("express").Router();
const Comment = require("mongoose").model("comments");

const requireLogin = require("../middlewares/requireLogin");

commentsRouter.get("/:projectId", async (request, response) => {
  const { projectId } = request.params;
  const comments = await Comment.find({ post: projectId })
    .populate("author", "name picture -_id")
    .select("-post")
    .exec();
  response.send(comments);
});

commentsRouter.post("/:projectId", requireLogin, async (request, response) => {
  const { projectId } = request.params;
  const { data } = request.body;
  const newComment = await new Comment({
    author: request.user.id,
    post: projectId,
    content: data,
  }).save();
  response.send(newComment);
});

commentsRouter.get("/:projectId/count", async (request, response) => {
  const { projectId } = request.params;
  const numComments = await Comment.find({ post: projectId }).countDocuments();
  response.send(numComments.toString());
});

module.exports = commentsRouter;
