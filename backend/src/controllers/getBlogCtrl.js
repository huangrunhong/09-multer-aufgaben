const { blogService } = require("../service");

const getBlogCtrl = async (_, res) => {
  try {
    const blogs = await blogService.getAllBlogs();
    res.status(200).json({ success: true, result: blogs });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: "Failed to load blogs" });
  }
};
module.exports = {
  getBlogCtrl,
};
