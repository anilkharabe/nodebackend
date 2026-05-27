import Student from '../models/studentModel';

// create

const createStudent = async (req: any, res: any) => {
  try {
    const student = new Student(req.body);
    const savedStudent = await student.save();
    res.json(savedStudent);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Sorry, we are facing some internal issues" });
  }
}

const getStudents =  async (req: any, res: any) => {
  try {
    console.log("first api called");
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Sorry, we are facing some internal issues" });
  }
}

const getStudentById = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    console.log("studentIDParams", id);

    const student = await Student.findById(id);
    res.json(student);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Sorry, we are facing some internal issues" });
  }
}

const updateStudent = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const updateStudent = req.body;

    const updatedStudent = await Student.findByIdAndUpdate(id, updateStudent);
    res.json(updatedStudent);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Sorry, we are facing some internal issues" });
  }
}

const updateStudentUsingPatch = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const updateStudent = req.body;

    const updatedStudent = await Student.findByIdAndUpdate(id, updateStudent);
    res.json(updatedStudent);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Sorry, we are facing some internal issues" });
  }
}

const deleteStudentById = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    const deletdRecord = await Student.findByIdAndDelete(id);
    res.json(deletdRecord);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Sorry, we are facing some internal issues" });
  }
}

export  {createStudent, getStudents, getStudentById, updateStudent, updateStudentUsingPatch, deleteStudentById};