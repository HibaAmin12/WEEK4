// ==========================================================
// Notes API Service
// ==========================================================
//
// Centralizes all note-related API requests.
// Keeping API logic here keeps React components focused
// on UI and state management.
// ==========================================================


// ==========================================================
// Backend Configuration
// ==========================================================

// Backend URL is provided through the Vite environment
// variable instead of being hardcoded.
const API_URL = import.meta.env.VITE_API_URL;


// ==========================================================
// Get All Notes
// ==========================================================

export async function getNotes(token) {

  // Fetch notes belonging to the authenticated user.
  const response = await fetch(
    `${API_URL}/api/v1/notes/`,
    {
      method: "GET",

      // Notes endpoints require JWT authentication.
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );


  // Convert HTTP errors into JavaScript errors
  // that can be handled by the UI.
  if (!response.ok) {

    const errorData = await response.json();

    throw new Error(
      errorData.detail ||
      `Failed to load notes (${response.status})`
    );
  }


  // Return the notes received from the backend.
  return response.json();
}


// ==========================================================
// Create Note
// ==========================================================

export async function createNote(token, noteData) {

  // Send note data to the backend using POST.
  const response = await fetch(
    `${API_URL}/api/v1/notes/`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      // Convert the note object into JSON.
      body: JSON.stringify(noteData),
    }
  );


  // Handle validation and authentication errors
  // returned by the backend.
  if (!response.ok) {

    const errorData = await response.json();

    throw new Error(
      errorData.detail ||
      `Failed to create note (${response.status})`
    );
  }


  // Return the newly created note.
  return response.json();
}


// ==========================================================
// Update Note
// ==========================================================

export async function updateNote(
  token,
  noteId,
  noteData
) {

  // Update the selected note using its ID.
  const response = await fetch(
    `${API_URL}/api/v1/notes/${noteId}`,
    {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      // Send the updated note data as JSON.
      body: JSON.stringify(noteData),
    }
  );


  // Handle errors such as unauthorized access
  // or a note that does not exist.
  if (!response.ok) {

    const errorData = await response.json();

    throw new Error(
      errorData.detail ||
      `Failed to update note (${response.status})`
    );
  }


  // Return the updated note.
  return response.json();
}


// ==========================================================
// Delete Note
// ==========================================================

export async function deleteNote(
  token,
  noteId
) {

  // Delete the selected note using its ID.
  const response = await fetch(
    `${API_URL}/api/v1/notes/${noteId}`,
    {
      method: "DELETE",

      // Delete operation requires JWT authentication.
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );


  // Handle errors returned by the backend.
  if (!response.ok) {

    const errorData = await response.json();

    throw new Error(
      errorData.detail ||
      `Failed to delete note (${response.status})`
    );
  }


  // The API returns 204 No Content after deletion,
  // so there is no JSON response to parse.
  return true;
}