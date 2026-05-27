import mongoose from "mongoose";
import StudentInterface from '../interfaces/studentInterface';
// schema
const studentSchema = new mongoose.Schema<StudentInterface>({
  name: String,
  age: Number,
  course: String,
});

// model
const Student = mongoose.model<StudentInterface>("Student", studentSchema);

export default Student;