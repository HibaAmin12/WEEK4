import { createContext, useContext, useState } from "react";

import { loginUser } from "../services/auth";


// ==========================================================
// Authentication Context
// ==========================================================
//
// This context stores authentication information
// that is required by different components.
//
// It provides:
// 1. JWT token
// 2. User role
// 3. Login function
// 4. Logout function
// 5. Authentication status
// ==========================================================


const AuthContext = createContext(null);


// ==========================================================
// Auth Provider
// ==========================================================
//
// AuthProvider wraps the application and makes
// authentication information available to all
// child components through useAuth().
// ==========================================================


export function AuthProvider({ children }) {


  // ========================================================
  // Token State
  // ========================================================


  // Check localStorage when the application starts.
  //
  // If a token already exists, the user remains
  // logged in even after refreshing the browser.
  const [token, setToken] = useState(
    localStorage.getItem("access_token")
  );


  // ========================================================
  // Role State
  // ========================================================


  // Store the role of the currently logged-in user.
  //
  // This is used by App.jsx to decide whether
  // the Admin Panel button should be displayed.
  const [role, setRole] = useState(
    localStorage.getItem("user_role")
  );


  // ========================================================
  // Login
  // ========================================================


  async function login(username, password) {


    // ------------------------------------------------------
    // Call Backend Login API
    // ------------------------------------------------------


    // loginUser sends username and password
    // to the FastAPI login endpoint.
    const data = await loginUser(
      username,
      password
    );


    // ------------------------------------------------------
    // Extract JWT Token
    // ------------------------------------------------------


    const accessToken =
      data.access_token;


    // ------------------------------------------------------
    // Extract User Role
    // ------------------------------------------------------
    //
    // Our backend puts the role inside the JWT:
    //
    // {
    //   "sub": user.id,
    //   "role": user.role
    // }
    //
    // We decode the JWT payload on the frontend
    // to read the role.
    // ------------------------------------------------------


    const payload =
      JSON.parse(
        atob(
          accessToken
            .split(".")[1]
            .replace(/-/g, "+")
            .replace(/_/g, "/")
        )
      );


    const userRole = payload.role;


    // ------------------------------------------------------
    // Update React State
    // ------------------------------------------------------


    setToken(accessToken);

    setRole(userRole);


    // ------------------------------------------------------
    // Store Authentication Information
    // ------------------------------------------------------


    // Store JWT so login survives page refresh.
    localStorage.setItem(
      "access_token",
      accessToken
    );


    // Store role so the frontend can restore
    // the role after refreshing the browser.
    localStorage.setItem(
      "user_role",
      userRole
    );


    // Return login response.
    return data;
  }


  // ========================================================
  // Logout
  // ========================================================


  function logout() {


    // Remove token from React state.
    setToken(null);


    // Remove role from React state.
    setRole(null);


    // Remove token from browser storage.
    localStorage.removeItem(
      "access_token"
    );


    // Remove role from browser storage.
    localStorage.removeItem(
      "user_role"
    );
  }


  // ========================================================
  // Context Value
  // ========================================================


  const value = {


    // JWT access token
    token,


    // Current user's role
    role,


    // Login function
    login,


    // Logout function
    logout,


    // Authentication status
    isAuthenticated: Boolean(token),
  };


  // ========================================================
  // Provider
  // ========================================================


  return (
    <AuthContext.Provider
      value={value}
    >
      {children}
    </AuthContext.Provider>
  );
}


// ==========================================================
// useAuth Custom Hook
// ==========================================================
//
// Components can use:
//
// const { token, role, login, logout } = useAuth();
//
// instead of directly accessing AuthContext.
// ==========================================================


export function useAuth() {


  const context =
    useContext(AuthContext);


  // Make sure useAuth is used
  // inside AuthProvider.
  if (!context) {


    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }


  return context;
}