// ==========================================================
// Main Application Component
// ==========================================================
//
// Controls authentication flow, page navigation, note editing,
// and role-based access for the Notes application.
// ==========================================================

import { useEffect, useState } from "react";

import { useAuth } from "./context/AuthContext";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import Admin from "./pages/Admin";

import Navbar from "./components/Navbar";


// ==========================================================
// App Component
// ==========================================================

function App() {

  // Authentication context provides the JWT token
  // and current user's role.
  const {
    token,
    role,
  } = useAuth();


  // Tracks which application screen is currently displayed.
  const [page, setPage] = useState("login");


  // Stores the note selected for editing.
  const [editNote, setEditNote] = useState(null);


  // After successful authentication, redirect
  // the user to their notes workspace.
  useEffect(() => {

    if (token) {
      setPage("notes");
    }

  }, [token]);


  // ========================================================
  // Authentication Flow
  // ========================================================

  // Unauthenticated users can only access
  // the Login and Register screens.
  if (!token) {

    if (page === "register") {

      return (
        <Register
          onLogin={() => setPage("login")}
        />
      );

    }


    return (
      <Login
        onRegister={() => setPage("register")}
      />
    );
  }


  // ========================================================
  // Navigation Handlers
  // ========================================================

  function handleNotes() {

    // Clear any selected note before returning
    // to the main notes workspace.
    setEditNote(null);

    setPage("notes");
  }


  function handleCreateNote() {

    // Create mode should not contain an existing note.
    setEditNote(null);

    setPage("create");
  }


  function handleEditNote(note) {

    // Store the selected note and open edit mode.
    setEditNote(note);

    setPage("edit");
  }


  function handleBackToNotes() {

    setEditNote(null);

    setPage("notes");
  }


  // Admin navigation is restricted to users
  // with the admin role.
  function handleAdmin() {

    if (role === "admin") {
      setPage("admin");
    }
  }


  // ========================================================
  // Admin Page
  // ========================================================

  if (page === "admin") {

    // Prevent non-admin users from accessing
    // the administrator interface.
    if (role !== "admin") {

      return (
        <div className="page-content">

          <h1>
            Access Denied
          </h1>

          <p>
            Admin privileges are required.
          </p>

          <button
            type="button"
            onClick={handleNotes}
          >
            Back to Notes
          </button>

        </div>
      );
    }


    return (
      <div>

        <Navbar
          onNotes={handleNotes}
          onAdmin={handleAdmin}
        />

        <Admin
          onBack={handleNotes}
        />

      </div>
    );
  }


  // ========================================================
  // Edit Note Page
  // ========================================================

  if (page === "edit" && editNote) {

    return (
      <div>

        <Navbar
          onNotes={handleNotes}
          onAdmin={handleAdmin}
        />

        <EditNote
          note={editNote}
          token={token}

          // Return to the notes workspace after
          // successfully updating the note.
          onUpdated={(updatedNote) => {

            console.log(
              "Updated note:",
              updatedNote
            );

            setEditNote(null);
            setPage("notes");
          }}

          onCancel={handleBackToNotes}
        />

      </div>
    );
  }


  // ========================================================
  // Create Note Page
  // ========================================================

  if (page === "create") {

    return (
      <div>

        <Navbar
          onNotes={handleNotes}
          onAdmin={handleAdmin}
        />

        <CreateNote
          onBack={handleBackToNotes}
        />

      </div>
    );
  }


  // ========================================================
  // Notes Workspace
  // ========================================================

  return (
    <div>

      <Navbar
        onNotes={handleNotes}
        onAdmin={handleAdmin}
      />

      <Notes
        onCreateNote={handleCreateNote}
        onEditNote={handleEditNote}
      />

    </div>
  );
}


// ==========================================================
// Export
// ==========================================================

export default App;