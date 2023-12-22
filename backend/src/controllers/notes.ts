import { RequestHandler } from "express";
import NoteModel from "../models/note";

// infers the type of the arguments in getNotes
export const getNotes: RequestHandler = async (req, res, next) => {
  try {
    const notes = await NoteModel.find().exec();
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};
