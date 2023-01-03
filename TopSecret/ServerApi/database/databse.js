const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const connectionString = `mongodb+srv://Khulugen:Khulugen.1017@cluster0.bwuaugr.mongodb.net/HOP_2C`;

dotenv.config();
const connectionString = process.env.MONGODB_URI;
const connectDatabase = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("Database is successfully connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDatabase;
