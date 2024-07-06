import mongoose from "mongoose";
const connectionURI = "mongodb://127.0.0.1:27017/mageture";

const connectToMongo = async () => {
  try {
    await mongoose.connect(connectionURI);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Database connection Failed", error);
  }
};

module.exports = connectToMongo;
