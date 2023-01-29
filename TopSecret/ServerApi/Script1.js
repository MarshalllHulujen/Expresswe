const express = require("express");
const cors = require("cors");
const connectDatabase = require("./database/databse");
const UserRouter = require("./Router/UserRouter");
const url = require("./Router/url");

const port = 8000;

const app = express();
app.use(cors());
app.use(express.json({ extented: false }));

app.use(UserRouter);
// app.use(url);

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

// 63aaab10d9a728dbb689039f

// 63aab101fffc9ce11e37af01

// 63aab13bfffc9ce11e37af06

// 63b2a93ec314854509158913

// 63b2b33d7f6109d11cc702df

// 63b2b3487f6109d11cc702e1

// 63b2b36d7f6109d11cc702e3

// 63b2b43d78d9e42a6bd60260

// 63b2b4576370e9742ebafb94

// 63b2b4616370e9742ebafb96

// 63b2b5c29c5d126a97a19e1f

// 63b2b5ef4e5ddd8022f0acd3

// 63b2b621856ee1f485c2f319

// 63b2b623856ee1f485c2f31b

// 63b2b624856ee1f485c2f31d

// 63b3f0edef84d7e684b8a4ea
