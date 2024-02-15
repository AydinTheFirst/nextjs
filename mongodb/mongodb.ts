import mongoose from "mongoose";

let connected = false;

export const connectDB = async () => {
  if (connected) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    const client = await mongoose.connect(process.env.mongodb!);
    console.log(`Connected to MongoDB: ${client.connection.host}`);
    connected = true;
    return client;
  } catch (error) {
    throw new Error(`Error connecting to MongoDB: ${error}`);
  }
};
