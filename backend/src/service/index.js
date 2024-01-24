const { addBlog } = require("./addBlog");
const { getAllBlogs } = require("./getAllBlogs");

const blogService = {
  addBlog,
  getAllBlogs,
};

module.exports = {
  blogService,
};
