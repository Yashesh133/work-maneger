import mongoose from "mongoose";
import { User } from "../model/users";

export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_management",
    });
  } catch (error) {
    console.log("failed to connect");
  }
};
