import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGODB__URI: any = process.env.MONGODB_URI;

const connectDatabase = async () => {
  try {
    const connect = await mongoose.connect(MONGODB__URI);
    console.log(`Database connected ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
export default connectDatabase;
