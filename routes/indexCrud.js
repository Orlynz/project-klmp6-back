import express from "express";

import {
  getAllSchool,
  createSchool,
  getSchoolById,
  updateSchool,
  deleteSchool,
} from "../controllers/school.js";

const router = express.Router();

router.get("/", getAllSchool);
router.get("/:id", getSchoolById);
router.post("/", createSchool);
router.patch("/:id", updateSchool);
router.delete("/:id", deleteSchool);

export default router;
