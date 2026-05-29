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
import validateMiddleware from '../middleware/validateMiddleware';
import studentValidateSchema from '../validators/studentValidators';

router.post("/", validateMiddleware(studentValidateSchema), createStudent);
router.get("/",  getStudents);
router.get("/:id",  getStudentById);
router.put("/:id", validateMiddleware(studentValidateSchema),updateStudent);
router.patch("/:id", validateMiddleware(studentValidateSchema), updateStudentUsingPatch);
router.delete("/:id", deleteStudentById);

export default router;