import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

export async function dbConnect() {
  try {
    if (MONGO_URI) {
      await mongoose.connect(MONGO_URI).then(() => console.log("connected!"));
    } else {
      throw new Error("Error in uri!");
    }
  } catch (err) {
    throw new Error("Error in connection with database!");
  }
}
