const { readJsonFile, writeJsonFile } = require("./filesystem.js");

const blogJsonFilePath =
  process.env.BLOG_PATH || __dirname + "/../../data/data.json";

const loadAllBlogs = () => readJsonFile(blogJsonFilePath);

const saveAllBlogs = (newBlogsArray) =>
  writeJsonFile(blogJsonFilePath, newBlogsArray);

module.exports = {
  loadAllBlogs,
  saveAllBlogs,
};
