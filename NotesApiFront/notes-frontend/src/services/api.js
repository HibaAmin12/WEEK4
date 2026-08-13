// Centralized API service for authenticated note operations.
// Keeps HTTP communication separate from React components.


// Base URL of the FastAPI backend.
const API_URL = import.meta.env.VITE_API_URL;


// Fetch all notes belonging to the authenticated user.
export async function getNotes(token) {

  const response = await fetch(
    `${API_URL}/api/v1/notes/`,
    {
      method: "GET",

      // Authenticate the request using the JWT.
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );


  // Handle HTTP errors explicitly because fetch()
  // does not reject promises for non-2xx responses.
  if (!response.ok) {

    const errorData = await response.json();

    throw new Error(
      errorData.detail || "Failed to fetch notes"
    );
  }


  // Return the notes received from the backend.
  return response.json();
}


// Create a new note for the authenticated user.
export async function createNote(noteData, token) {

  const response = await fetch(
    `${API_URL}/api/v1/notes/`,
    {
      method: "POST",

      // Send JSON data and authenticate the request.
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      // Convert the note object into JSON for the API.
      body: JSON.stringify(noteData),
    }
  );


  // Handle validation and authentication errors.
  if (!response.ok) {

    const errorData = await response.json();

    throw new Error(
      errorData.detail || "Failed to create note"
    );
  }


  // Return the newly created note.
  return response.json();
}


// Update an existing note identified by its ID.
export async function updateNote(noteId, noteData, token) {

  const response = await fetch(
    `${API_URL}/api/v1/notes/${noteId}`,
    {
      method: "PUT",

      // Send the updated data and authenticate the request.
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(noteData),
    }
  );


  // Handle errors such as unauthorized access
  // or a note that does not exist.
  if (!response.ok) {

    const errorData = await response.json();

    throw new Error(
      errorData.detail || "Failed to update note"
    );
  }


  // Return the updated note from the API.
  return response.json();
}


// Delete a note using its unique ID.
export async function deleteNote(noteId, token) {

  const response = await fetch(
    `${API_URL}/api/v1/notes/${noteId}`,
    {
      method: "DELETE",

      // Authenticate the delete operation.
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );


  // Handle API errors while supporting responses
  // that may not contain a JSON error body.
  if (!response.ok) {

    let errorMessage =
      "Failed to delete note";

    try {

      const errorData = await response.json();

      errorMessage =
        errorData.detail || errorMessage;

    } catch {

      // Keep the default message for non-JSON responses.
    }

    throw new Error(errorMessage);
  }


  // DELETE returns 204 No Content on success,
  // so there is no response body to parse.
  return true;
}