import mongoose from "mongoose";

let isConnected = false; 

export const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI;

    if (!MONGO_URI) {
      console.log("MONGO_URI is not defined in environment variables");
    }

    if (isConnected) {
      console.log("Using existing MongoDB connection");
      return;
    }

    await mongoose.connect(MONGO_URI!);

    isConnected = true;
    console.log("Connected to MongoDB");

  } catch (err: any) {
    console.error(" MongoDB connection error:", err.message);
  }
};
