import { useEffect, useState } from "react";

import {
  getNotes,
  deleteNote,
} from "../services/notes";

import { useAuth } from "../context/AuthContext";


// Notes workspace component.
// Fetches, displays, edits, and deletes the authenticated user's notes.
function Notes({
  onCreateNote,
  onEditNote,
}) {

  const { token } = useAuth();


  // Store notes returned by the backend.
  const [notes, setNotes] = useState([]);

  // Manage loading and API error states.
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Track the note selected for deletion.
  const [noteToDelete, setNoteToDelete] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);


  // Fetch the user's notes whenever the authentication token changes.
  useEffect(() => {

    async function loadNotes() {

      try {

        setError("");
        setLoading(true);

        // Request notes from the protected API.
        const data = await getNotes(token);

        setNotes(data);

      } catch (err) {

        setError(
          err.message ||
          "Failed to load notes."
        );

      } finally {

        setLoading(false);

      }

    }

    // Only fetch notes when the user is authenticated.
    if (token) {
      loadNotes();
    }

  }, [token]);


  // Open the confirmation dialog for a selected note.
  function openDeleteModal(note) {
    setNoteToDelete(note);
  }


  // Close the delete dialog unless deletion is in progress.
  function closeDeleteModal() {

    if (!deleteLoading) {
      setNoteToDelete(null);
    }

  }


  // Delete the selected note through the API
  // and immediately update the local UI state.
  async function handleDelete() {

    if (!noteToDelete) {
      return;
    }

    try {

      setError("");
      setDeleteLoading(true);

      // Send the authenticated delete request.
      await deleteNote(
        token,
        noteToDelete.id
      );

      // Remove the deleted note without refetching the entire list.
      setNotes((currentNotes) =>
        currentNotes.filter(
          (note) =>
            note.id !== noteToDelete.id
        )
      );

      setNoteToDelete(null);

    } catch (err) {

      setError(
        err.message ||
        "Failed to delete note."
      );

    } finally {

      setDeleteLoading(false);

    }

  }


  // Display a loading state while notes are being fetched.
  if (loading) {

    return (

      <div className="notes-page">

        <div className="notes-loading">

          <div className="loading-orb">
            📝
          </div>

          <h2>
            Loading your notes
          </h2>

          <p>
            Just a moment...
          </p>

        </div>

      </div>

    );

  }


  return (

    <div className="notes-page">


      {/* Workspace header and primary action. */}
      <div className="notes-header">

        <div className="notes-title-area">

          <span className="notes-label">
            YOUR WORKSPACE
          </span>

          <h1>
            My Notes
          </h1>

          <p>
            Capture ideas, organize thoughts,
            and keep everything important close.
          </p>

        </div>


        <button
          type="button"
          className="create-note-button"
          onClick={onCreateNote}
        >

          <span className="create-note-icon">
            +
          </span>

          New Note

        </button>

      </div>


      {/* Display note count when the collection is not empty. */}
      {notes.length > 0 && (

        <div className="notes-toolbar">

          <div className="notes-count">

            <strong>
              {notes.length}
            </strong>

            <span>
              {notes.length === 1
                ? "note"
                : "notes"}
            </span>

          </div>

          <span className="notes-helper">
            Your personal collection
          </span>

        </div>

      )}


      {/* Display API or application errors. */}
      {error && (

        <div className="notes-error">

          <span>!</span>

          <p>
            {error}
          </p>

        </div>

      )}


      {/* Provide an onboarding state when no notes exist. */}
      {notes.length === 0 && !error && (

        <div className="empty-notes">

          <div className="empty-notes-icon">
            ✨
          </div>

          <span className="empty-notes-label">
            START WRITING
          </span>

          <h2>
            Your space is waiting.
          </h2>

          <p>
            Create your first note and start
            turning your thoughts into something
            you can keep.
          </p>

          <button
            type="button"
            className="empty-create-button"
            onClick={onCreateNote}
          >

            <span>
              +
            </span>

            Create Your First Note

          </button>

        </div>

      )}


      {/* Render the authenticated user's notes as reusable cards. */}
      {notes.length > 0 && (

        <div className="notes-grid">

          {notes.map((note, index) => (

            <article
              key={note.id}
              className="note-card"
            >

              <div className="note-card-accent"></div>


              {/* Card metadata. */}
              <div className="note-card-top">

                <span className="note-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="note-status">
                  Personal
                </span>

              </div>


              {/* Note title and content. */}
              <div className="note-card-content">

                <h2>
                  {note.title}
                </h2>

                <p className="note-body">
                  {note.body}
                </p>

              </div>


              {/* Note metadata and available actions. */}
              <div className="note-card-footer">

                <span className="note-id">
                  Note #{note.id}
                </span>


                <div className="note-actions">

                  {/* Open the note editor. */}
                  <button
                    type="button"
                    className="note-edit-button"
                    onClick={() =>
                      onEditNote(note)
                    }
                  >

                    <span>
                      ✎
                    </span>

                    Edit

                  </button>


                  {/* Open the delete confirmation dialog. */}
                  <button
                    type="button"
                    className="note-delete-button"
                    onClick={() =>
                      openDeleteModal(note)
                    }
                  >

                    <span>
                      ⌫
                    </span>

                    Delete

                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

      )}


      {/* Confirm deletion before permanently removing a note. */}
      {noteToDelete && (

        <div
          className="delete-modal-overlay"
          onClick={closeDeleteModal}
        >

          <div
            className="delete-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* Prevent accidental closure while deletion is running. */}
            <button
              type="button"
              className="modal-close-button"
              onClick={closeDeleteModal}
              disabled={deleteLoading}
            >
              ×
            </button>


            <div className="delete-modal-icon">
              🗑️
            </div>

            <span className="delete-modal-label">
              DELETE NOTE
            </span>

            <h2>
              Are you sure?
            </h2>

            <p>
              You're about to delete
              <strong>
                {" "}
                "{noteToDelete.title}"
              </strong>
              .
            </p>

            <small>
              This action cannot be undone.
            </small>


            {/* Confirmation and cancellation actions. */}
            <div className="delete-modal-actions">

              <button
                type="button"
                className="delete-cancel-button"
                onClick={closeDeleteModal}
                disabled={deleteLoading}
              >
                Keep Note
              </button>


              <button
                type="button"
                className="delete-confirm-button"
                onClick={handleDelete}
                disabled={deleteLoading}
              >

                {deleteLoading
                  ? "Deleting..."
                  : "Yes, Delete"}

              </button>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}


export default Notes;