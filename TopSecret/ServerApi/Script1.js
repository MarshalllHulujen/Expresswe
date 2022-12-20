const express = require("express")
const UserRouter = require("./router/userRouter")

const port = 8000;

const app = express();
app.use(express.json())

app.use(UserRouter);

// app.get("/users", (req, res) => {
//     res.send("Get request is successfully.");
// });

// app.post("/", (req, res) =>{
//     res.send("Post request is successfully.")
// });

// app.put("/", (req, res) =>{
//     res.send("Put request is successfully.")
// });

// app.delete("/", (req, res) =>{
//     res.send("Delete request is successfully.")
// });

app.listen(port, () =>{
    console.log(`server is running at localhost:${port}`);
});