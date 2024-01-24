const { blogService } = require("../service");

const postAddedBlogCtrl = async (req, res) => {
  console.log(req.body);
  try {
    const newBlog = {
      id: Date.now(),
      title: req.body.title,
      content: req.body.content,
      image: `http://localhost:1111/${req.files?.at(0)?.originalname}`,
    };

    const newBlogs = await blogService.addBlog(newBlog);

    res.status(201).json({ success: true, result: newBlogs });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: "Failed to update blogs" });
  }
};
module.exports = {
  postAddedBlogCtrl,
};
