import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connector = async () => {
  try {
    const done = await mongoose.connect(`${process.env.MONGO_URL}`, {});
    console.log("database connected!!");
  } catch (err) {
    console.log("databse error:", err);
  }
};

export default connector;
