const multer = require("multer");
const express = require("express");
const { BlogsController } = require("../controllers");

const storage = multer.diskStorage({
  destination: __dirname + "/../../data/static/uploads",
  filename: (req, file, next) => {
    next(null, file.originalname);
  },
});
const uploadMiddleware = multer({ storage: storage });

const blogRouter = express.Router();

blogRouter.get("/", BlogsController.getBlogs);
blogRouter.post("/", uploadMiddleware.any(), BlogsController.postBlog);

module.exports = {
  blogRouter,
};
