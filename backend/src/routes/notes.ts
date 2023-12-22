import express from "express";
import * as NotesController from "../controllers/notes";

const router = express.Router();

router.get("/", NotesController.getNotes);

// Sedning notes to server
router.post("/", NotesController.createNote);

export default router;
