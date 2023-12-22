// Creates a model of notes on the front end that match the backend retrival
export interface Note {
  _id: string;
  title: string;
  text?: string;
  createdAt: string;
  updatedAt: string;
}
