import mongoose from "mongoose";
import { DB_URI } from "./config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
  }
};
