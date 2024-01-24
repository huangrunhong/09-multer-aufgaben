const { getBlogCtrl } = require("./getBlogCtrl");
const { postAddedBlogCtrl } = require("./postAddBlogCtrl");

const BlogsController = {
  getBlogs: getBlogCtrl,
  postBlog: postAddedBlogCtrl,
};

module.exports = {
  BlogsController,
};
