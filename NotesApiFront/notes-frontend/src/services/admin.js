// Provides API communication for administrator-specific operations.
// Admin endpoints require a valid JWT with the appropriate role.


// Base URL of the FastAPI backend.
const API_URL = import.meta.env.VITE_API_URL;


// Fetch all notes available to an administrator.
// The JWT is included to authenticate and authorize the request.
export async function getAllNotesForAdmin(token) {

  const response = await fetch(
    `${API_URL}/api/v1/admin/notes`,
    {
      method: "GET",

      // Authenticate the request using the user's JWT.
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );


  // Handle HTTP errors explicitly because fetch()
  // does not reject promises for responses such as 401 or 403.
  if (!response.ok) {

    let errorMessage =
      `Failed to load admin notes (${response.status})`;

    try {

      // Use the backend's detail message when available.
      const errorData = await response.json();

      errorMessage =
        errorData.detail || errorMessage;

    } catch {
      // Keep the default message when the response is not JSON.
    }

    // Propagate the error to the Admin component.
    throw new Error(errorMessage);
  }


  // Return the parsed notes received from the backend.
  return response.json();
}