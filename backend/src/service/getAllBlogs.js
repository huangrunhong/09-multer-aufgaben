const { loadAllBlogs } = require("../data-access/blogDAO");

const getAllBlogs = () => loadAllBlogs();

module.exports = {
  getAllBlogs,
};
