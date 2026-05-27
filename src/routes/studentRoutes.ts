import express from "express";
const router = express.Router();

import {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  updateStudentUsingPatch,
  deleteStudentById,
} from "../controllers/studentController";

router.post("/", createStudent);
router.get("/", getStudents);
router.get("/:id", getStudentById);
router.put("/:id", updateStudent);
router.patch("/:id", updateStudentUsingPatch);
router.delete("/:id", deleteStudentById);

export default router;