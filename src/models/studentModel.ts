import mongoose from "mongoose";
import StudentInterface from '../interfaces/studentInterface';
// schema
const studentSchema = new mongoose.Schema<StudentInterface>({
  name: {
    type: String,
    minLength: [3, "Name must be at least 3 characters"],
    maxLength: [40, "Name must be at exceed 40 characters"],
    required: [true, "Name is required"],
    trim: true
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min:[18, 'Minimum age should be 18'],
    max: [60, 'Maxium age should be 60'],
  },
  course: {
    type: String,
    required: [true, 'Course is required'],
    enum:{
      values: ["MERN", "Java", "Python", "DevOps", "AI"],
      message:"Course is not valid"
    }
  },
  email:{
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter valid email']
  },
  isActive:{
    type: Boolean,
    default: true
  },
  skills:{
    type: [String],
    default:[]
  },
  address:{
    city:{
      required:[true, 'City is required'],
      type: String,
      minLength: [3, "City must be at least 3 characters"],
      maxLength: [40, "City must be at exceed 40 characters"],
      trim: true
    },
    state:{
      type: String,
      minLength: [3, "State must be at least 3 characters"],
      maxLength: [40, "City must be at exceed 40 characters"],
      trim: true
    },
    pincode:{
      type: Number
    }
  }

});

// MERN, Java, Python, DevOps, AI

// model
const Student = mongoose.model<StudentInterface>("Student", studentSchema);

export default Student;