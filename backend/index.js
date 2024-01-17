const express = require("express");

const { readJsonFile, writeJsonFile } = require("./fsUnit");

const cors = require("cors");
const multer = require("multer");
const bodyParser = require("body-parser");

// const uploadMiddelware = multer({ dest: "./uploads" });
const storage = multer.diskStorage({
  destination: "./static/uploads",
  filename: (req, file, next) => {
    next(null, file.originalname);
  },
});
const uploadMiddelware = multer({ storage: storage });

const app = express();

const OK = 200;
const CREATED = 201;
const INTERNAL_SERVER_ERROR = 500;
const NOT_FOUND = 404;

app.use(express.static("static"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log("new Request", req.method, req.url);
  next();
});

// app.use(express.json());

// get all blogs
app.get("/api/blogs", (req, res) => {
  readJsonFile("./data.json")
    .then((blogs) => {
      res.status(OK).json({ success: true, result: blogs });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(INTERNAL_SERVER_ERROR)
        .json({ success: false, error: "Failed to load Blogs" });
    });
});

// post image
app.post("/api/blogs", uploadMiddelware.any(), (req, res) => {
  readJsonFile("./data.json").then((blogs) => {
    const newBlog = {
      id: Date.now(),
      title: req.body.title,
      content: req.body.content,
      image: `http://localhost:1111/uploads/${req.files?.at(0)?.originalname}`,
    };
    console.log(newBlog);
    writeJsonFile("./data.json", [...blogs, newBlog])
      .then((newBlogs) =>
        res.status(CREATED).json({ success: true, result: newBlogs })
      )
      .catch(() =>
        res
          .status(INTERNAL_SERVER_ERROR)
          .json({ success: false, error: "Failed to update blogs" })
      );
  });
});

const PORT = 1111;
app.listen(PORT, () => console.log("server at Port:", PORT));
