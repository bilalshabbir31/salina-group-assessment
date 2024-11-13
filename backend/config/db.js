import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://bilalshabbir166:sdznR1LjIHwRK5s8@cluster0.yywkl.mongodb.net/demo?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
    process.exit(1);
  }
};
