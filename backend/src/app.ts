import "dotenv/config";
import express, { NextFunction, Response, Request } from "express";
import NoteModel from "./models/note";

const app = express();

// Middleware that gets Note as a JSON
app.get("/", async (req, res, next) => {
  try {
    const notes = await NoteModel.find().exec();
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
});

// Middleware for route not found if not executed properly funneled into the error block
app.use((req, res, next) => {
  next(Error("Endpoint not found"));
});

// Resuable error catch block as middleware
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  let errorMessage = "An unknown error occured";
  if (error instanceof Error) errorMessage = error.message;
  res.status(500).json({ error: errorMessage });
});

export default app;
