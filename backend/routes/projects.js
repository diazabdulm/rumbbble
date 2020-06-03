const fs = require("fs");
const projectsRouter = require("express").Router();
const { model } = require("mongoose");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null, "./uploads/");
  },
  filename: (request, file, callback) => {
    callback(null, new Date().toISOString() + file.originalname);
  },
});
const fileFilter = (request, file, callback) => {
  const acceptedFileTypes = ["image/jpeg", "image/png"];
  return acceptedFileTypes.includes(file.mimetype)
    ? callback(null, true)
    : callback(null, false);
};
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 },
});

const requireLogin = require("../middlewares/requireLogin");

const Post = model("posts");
const User = model("users");
const Comment = model("comments");
const Like = model("likes");

projectsRouter.get("/all", async (request, response) => {
  const projects = await Post.find()
    .populate("author", "name picture -_id")
    .limit(20)
    .sort({ _id: -1 })
    .exec();
  response.send(projects);
});

projectsRouter.get("/", requireLogin, async (request, response) => {
  const projects = await Post.find({ author: request.user.id });
  response.send(projects);
});

projectsRouter.post(
  "/",
  requireLogin,
  upload.single("image"),
  async (request, response) => {
    const newPost = await new Post({
      ...request.body,
      image: request.file.path,
      author: request.user.id,
    }).save();
    response.redirect("/");
  }
);

projectsRouter.get("/:projectId", async (request, response) => {
  const { projectId } = request.params;
  const project = await Post.findById(projectId).populate(
    "author",
    "_id name picture"
  );
  response.send(project);
});

projectsRouter.patch("/:projectId", async (request, response) => {
  const { projectId } = request.params;
  await Post.updateOne({ _id: projectId }, { $set: { ...request.body } });
  response.json({});
});

projectsRouter.delete("/:projectId", async (request, response) => {
  const { projectId } = request.params;
  const post = await Post.findByIdAndDelete(projectId);
  await fs.unlinkSync(post.image);
  await Comment.find({ post: projectId }).remove();
  await Like.find({ post: projectId }).remove();
  response.json({});
});

module.exports = projectsRouter;
