import mongoose from "mongoose";

const connectDb=async()=>{
    try{
  let connected=await mongoose.connect(process.env.MONGODB_URI);
  console.log("Database connected...");
    }catch(error){
        console.log("Error while connecting to Dabase");
        console.log(error);
    }
}

export default connectDb;