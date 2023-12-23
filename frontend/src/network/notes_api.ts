import { Note } from "../models/note";

// Fetching data to catch errors that are 400 or 500 status
async function fetchData(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);
  if (response.ok) {
    return response;
  } else {
    const errorBody = await response.json();
    const errorMessage = errorBody.error;
    throw Error(errorMessage);
  }
}

// Using the fetchData function to use a GET from the server, originally in the app but bad practice due to the GET in main app
export async function fetchNotes(): Promise<Note[]> {
  const response = await fetchData("/api/notes", {
    method: "GET",
  });
  return response.json();
}
