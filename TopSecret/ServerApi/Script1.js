const express = require("express");
const connectDatabase = require("./database/databse");
const UserRouter = require("./Router/UserRouter");
const PostRouter = require("./Router/PostRouter");
const CommentRouter = require("./Router/CommentRouter");

const port = 8000;

const app = express();
app.use(express.json());

app.use(UserRouter);
app.use(PostRouter);
app.use(CommentRouter);

// app.get("/users/:id", (req, res) => {ç
//   res.send(req.query.id);
// });

// app.listen(port, () => {
//   console.log(`server is running at localhost:${port}`);
// });

const startServer = async () => {
  await connectDatabase();
  app.listen(port, () => {
    console.log(`server is running at localhost:${port}`);
  });
};

startServer();
