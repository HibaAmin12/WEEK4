// ==========================================================
// Authentication Context
// ==========================================================
//
// Provides authentication state and actions to the
// entire React application.
//
// Responsibilities:
// - Store JWT authentication state
// - Extract the user's role from the JWT
// - Handle login and logout
// - Persist authentication across page refreshes
// ==========================================================

import {
  createContext,
  useContext,
  useState,
} from "react";

import { loginUser } from "../services/auth";


// ==========================================================
// Authentication Context
// ==========================================================

const AuthContext = createContext(null);


// ==========================================================
// Extract Role From JWT
// ==========================================================
//
// The FastAPI backend includes the user's role in the
// JWT payload. The frontend decodes the payload only to
// determine UI access such as the Admin dashboard.
// ==========================================================

function getRoleFromToken(token) {

  if (!token) {
    return null;
  }

  try {

    // JWT structure:
    // header.payload.signature
    //
    // Only the payload is required to read the role.
    const payload = token.split(".")[1];

    // Decode the Base64URL payload into a JavaScript object.
    const decodedPayload = JSON.parse(
      atob(
        payload
          .replace(/-/g, "+")
          .replace(/_/g, "/")
      )
    );

    return decodedPayload.role || null;

  } catch {

    // Invalid tokens should not break the application.
    return null;
  }
}


// ==========================================================
// Authentication Provider
// ==========================================================

export function AuthProvider({ children }) {

  // Restore the JWT from localStorage so authentication
  // survives browser refreshes.
  const [token, setToken] = useState(
    localStorage.getItem("access_token")
  );


  // Derive the user's role from the stored JWT.
  const [role, setRole] = useState(
    getRoleFromToken(
      localStorage.getItem("access_token")
    )
  );


  // ========================================================
  // Login
  // ========================================================

  async function login(username, password) {

    // Authentication API call is kept in the service layer.
    const data = await loginUser(
      username,
      password
    );

    const accessToken = data.access_token;

    // Update application authentication state.
    setToken(accessToken);

    // Extract and store the role for role-based UI access.
    const userRole = getRoleFromToken(
      accessToken
    );

    setRole(userRole);

    // Persist the JWT for browser refreshes.
    localStorage.setItem(
      "access_token",
      accessToken
    );

    return data;
  }


  // ========================================================
  // Logout
  // ========================================================

  function logout() {

    // Clear authentication from React state.
    setToken(null);
    setRole(null);

    // Remove the persisted JWT from the browser.
    localStorage.removeItem(
      "access_token"
    );
  }


  // ========================================================
  // Context Value
  // ========================================================

  const value = {
    token,
    role,
    login,
    logout,

    // Provides a simple authentication status
    // for components that need it.
    isAuthenticated: Boolean(token),
  };


  // ========================================================
  // Context Provider
  // ========================================================

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}


// ==========================================================
// useAuth Hook
// ==========================================================
//
// Provides a reusable interface for accessing
// authentication state and actions from any component.
// ==========================================================

export function useAuth() {

  const context = useContext(
    AuthContext
  );

  // Prevent using the authentication hook outside
  // of the AuthProvider.
  if (!context) {

    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}