import { InferSchemaType, Schema, model } from "mongoose";

const noteSchema = new Schema(
  {
    title: { type: String, required: true },
    text: { type: String },
  },
  { timestamps: true }
);

// Create a Type for Typescript and export the model for use
type Note = InferSchemaType<typeof noteSchema>;

export default model<Note>("Note", noteSchema);
