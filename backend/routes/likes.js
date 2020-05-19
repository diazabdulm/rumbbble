const likesRouter = require("express").Router();
const Like = require("mongoose").model("likes");

const requireLogin = require("../middlewares/requireLogin");

likesRouter.post("/:projectId", requireLogin, async (request, response) => {
  const { projectId } = request.params;
  const doesLikeExist = await Like.exists({
    post: projectId,
    author: request.user.id,
  });
  if (doesLikeExist) return response.send("um no");
  const newLike = await new Like({
    author: request.user.id,
    post: projectId,
  }).save();
  response.send(newLike);
});

likesRouter.get("/:projectId/count", async (request, response) => {
  const { projectId } = request.params;
  const numLikes = await Like.find({ post: projectId }).countDocuments();
  response.send(numLikes.toString());
});

module.exports = likesRouter;
