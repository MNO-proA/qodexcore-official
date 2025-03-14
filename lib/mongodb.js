import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

export async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(MONGO_URI);

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

