import { RequestHandler } from "express";
import NoteModel from "../models/note";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import { assertIsDefined } from "../util/assertIsDefined";

// infers the type of the arguments in getNotes
export const getNotes: RequestHandler = async (req, res, next) => {
  const authenticatedUserId = req.session.userId;

  try {
    assertIsDefined(authenticatedUserId);
    const notes = await NoteModel.find({ userId: authenticatedUserId }).exec();
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};

// Singular note by Id
export const getNote: RequestHandler = async (req, res, next) => {
  const noteId = req.params.noteId;
  const authenticatedUserId = req.session.userId;

  try {
    assertIsDefined(authenticatedUserId);
    if (!mongoose.isValidObjectId(noteId)) {
      throw createHttpError(400, "Invalid Note Id"); //Not up to the Id syntax standard
    }
    const note = await NoteModel.findById(noteId).exec();
    if (!note) {
      throw createHttpError(404, "Note not found"); //Not a note that exists in the DB with correct Id syntax
    }

    if (!note.userId.equals(authenticatedUserId)) {
      throw createHttpError(401, "You cannot access this note");
    }

    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};

interface CreateNoteBody {
  title?: string;
  text?: string;
}

// Create a note
export const createNote: RequestHandler<
  unknown,
  unknown,
  CreateNoteBody,
  unknown
> = async (req, res, next) => {
  const title = req.body.title;
  const text = req.body.text;
  const authenticatedUserId = req.session.userId;

  try {
    assertIsDefined(authenticatedUserId);

    if (!title) {
      throw createHttpError(400, "Note requires a title");
    }

    const newNote = await NoteModel.create({
      userId: authenticatedUserId,
      title: title,
      text: text,
    });

    res.status(201).json(newNote);
  } catch (error) {
    next(error);
  }
};

interface UpdateNoteParams {
  noteId: string;
}

interface UpdateNoteBody {
  title?: string;
  text?: string;
}

// All or nothing for updating RequestHandler, all 4 or none
export const updateNote: RequestHandler<
  UpdateNoteParams,
  unknown,
  UpdateNoteBody,
  unknown
> = async (req, res, next) => {
  const noteId = req.params.noteId;
  const newTitle = req.body.title;
  const newText = req.body.text;
  const authenticatedUserId = req.session.userId;

  try {
    assertIsDefined(authenticatedUserId);
    if (!mongoose.isValidObjectId(noteId)) {
      throw createHttpError(400, "Invalid Note Id");
    }
    if (!newTitle) {
      throw createHttpError(
        400,
        "Cannot update a note that does not have a title"
      );
    }
    const note = await NoteModel.findById(noteId).exec();
    if (!note) {
      throw createHttpError(404, "Note not found");
    }
    if (!note.userId.equals(authenticatedUserId)) {
      throw createHttpError(401, "You cannot access this note");
    }
    note.title = newTitle;
    note.text = newText;

    const updatedNote = await note.save();

    res.status(200).json(updatedNote);
  } catch (error) {
    next(error);
  }
};

export const deleteNote: RequestHandler = async (req, res, next) => {
  const noteId = req.params.noteId;
  const authenticatedUserId = req.session.userId;

  try {
    assertIsDefined(authenticatedUserId);
    if (!mongoose.isValidObjectId(noteId)) {
      throw createHttpError(400, "Invalid Note Id");
    }
    const note = await NoteModel.findById(noteId).exec();
    if (!note) {
      throw createHttpError(404, "Note could not be found");
    }
    if (!note.userId.equals(authenticatedUserId)) {
      throw createHttpError(401, "You cannot access this note");
    }
    await note.deleteOne();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
