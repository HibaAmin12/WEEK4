// ==========================================================
// Authentication Service
// ==========================================================
//
// Handles authentication API requests including
// user login and registration.
//
// Keeping authentication logic in a separate service
// keeps React components clean and reusable.
// ==========================================================


// ==========================================================
// Backend Configuration
// ==========================================================

// Backend URL is provided through the Vite environment
// variable so the API endpoint is configurable.
const API_URL = import.meta.env.VITE_API_URL;


// ==========================================================
// Login User
// ==========================================================

export async function loginUser(username, password) {

  // FastAPI's OAuth2PasswordRequestForm expects
  // URL-encoded form data instead of JSON.
  const formData = new URLSearchParams();

  formData.append("username", username);
  formData.append("password", password);


  // Send credentials to the authentication endpoint.
  const response = await fetch(
    `${API_URL}/api/v1/auth/login`,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/x-www-form-urlencoded",
      },

      body: formData,
    }
  );


  // Convert backend authentication errors into
  // JavaScript errors for the UI layer.
  if (!response.ok) {

    const errorData = await response.json();

    throw new Error(
      errorData.detail || "Login failed"
    );
  }


  // Returns the JWT access token response.
  return response.json();
}


// ==========================================================
// Register User
// ==========================================================

export async function registerUser(
  username,
  password,
  role = "user"
) {

  // Send registration data as JSON because the
  // FastAPI registration endpoint expects JSON input.
  const response = await fetch(
    `${API_URL}/api/v1/auth/register`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        username,
        password,
        role,
      }),
    }
  );


  // Handle validation or registration errors
  // returned by the backend.
  if (!response.ok) {

    const errorData = await response.json();

    throw new Error(
      errorData.detail || "Registration failed"
    );
  }


  // Returns the newly created user data.
  return response.json();
}