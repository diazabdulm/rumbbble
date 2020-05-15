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

projectsRouter.get("/all", async (request, response) => {
  const projects = await Post.find()
    .populate("author", "name picture")
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
  const project = await Post.findById(projectId);
  response.send(project);
});

projectsRouter.post("/:projectId/comments", async (request, response) => {
  try {
    const newComment = await new Comment({});

  } catch (error) {
    throw Error(error);
  }
});

module.exports = projectsRouter;
