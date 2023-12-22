import "dotenv/config";
import express, { NextFunction, Response, Request } from "express";
import notesRoutes from "./routes/notes";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

// Middleware that catches requests to endpoints, checks notesRoutes, look which fits
app.use("/api/notes", notesRoutes);

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
