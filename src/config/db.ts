import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/studentDB")
    } catch (error) {
        console.log("Mongo DB connection error:", error)
    }
}

export default connectDB;