const { saveAllBlogs, loadAllBlogs } = require("../data-access/blogDAO");

const addBlog = async (newBlog) => {
  const blogs = await loadAllBlogs();
  const newBlogsArray = [newBlog, ...blogs];
  await saveAllBlogs(newBlogsArray);
  return newBlogsArray;
};

module.exports = {
  addBlog,
};
