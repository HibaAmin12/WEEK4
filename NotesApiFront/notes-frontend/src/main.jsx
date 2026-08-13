// ==========================================================
// Application Entry Point
// ==========================================================
//
// Initializes the React application and provides global
// authentication state through AuthProvider.
// ==========================================================

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";

import { AuthProvider } from "./context/AuthContext";


// ==========================================================
// Render Application
// ==========================================================

// AuthProvider wraps the application so all components
// can access authentication state and actions.
createRoot(document.getElementById("root")).render(

  <StrictMode>

    <AuthProvider>

      <App />

    </AuthProvider>

  </StrictMode>
);