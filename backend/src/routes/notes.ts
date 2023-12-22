import express from "express";
import * as NotesController from "../controllers/notes";

const router = express.Router();

// Get all notes
router.get("/", NotesController.getNotes);

// Get singular note
router.get("/:noteId", NotesController.getNote);

// Sedning notes to server
router.post("/", NotesController.createNote);

// Patch used for updating a resource
router.patch("/:noteId", NotesController.updateNote);

// Delete used for deleting an entry
router.delete("/:noteId", NotesController.deleteNote);

export default router;
