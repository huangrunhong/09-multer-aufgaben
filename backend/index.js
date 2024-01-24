const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const { blogRouter } = require("./src/routes/router");

const app = express();

// const OK = 200;
// const CREATED = 201;
// const INTERNAL_SERVER_ERROR = 500;
// const NOT_FOUND = 404;

app.use(cors());

app.use((req, _, next) => {
  console.log("new request", req.method, req.url);
  next();
});

app.use(logger("dev"));

app.use(express.json());
app.use(express.static("data/static/uploads"));

app.use("/api/blogs", blogRouter);

app.use((_, res) =>
  res.status(404).json({ su: false, error: "Route not found" })
);

const PORT = 1111;
app.listen(PORT, () => console.log("server at Port:", PORT));
