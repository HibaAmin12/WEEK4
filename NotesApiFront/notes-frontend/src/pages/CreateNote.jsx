// ==========================================================
// Create Note Page
// ==========================================================

import { useState } from "react";

import { createNote } from "../services/notes";
import { useAuth } from "../context/AuthContext";

// Handles creation of a new note for the authenticated user.
function CreateNote({ onBack, onCreated }) {

  const { token } = useAuth();

  // Form fields and request status.
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Validate the form and submit the note to the API.
  async function handleSubmit(event) {

    event.preventDefault();

    setError("");
    setSuccess("");

    // Prevent submission when required fields are empty.
    if (!title.trim() || !body.trim()) {

      setError(
        "Please enter both a title and note content."
      );

      return;
    }

    // Ensure the user is authenticated before creating a note.
    if (!token) {

      setError(
        "Authentication token is missing. Please login again."
      );

      return;
    }

    try {

      setLoading(true);

      // Prepare the payload expected by the backend.
      const noteData = {
        title: title.trim(),
        body: body.trim(),
        category_id: null,
      };

      // Send the authenticated request to the Notes API.
      const newNote = await createNote(
        token,
        noteData
      );

      setSuccess(
        `Note "${newNote.title}" created successfully.`
      );

      // Notify the parent component so it can update its state.
      if (onCreated) {
        onCreated(newNote);
      }

      // Reset the form after successful creation.
      setTitle("");
      setBody("");

    } catch (err) {

      setError(
        err.message ||
        "Something went wrong. Please try again."
      );

    } finally {

      setLoading(false);
    }
  }

  return (

    <div className="create-note-page">

      <div className="create-note-card">

        {/* Page heading and note creation context */}
        <div className="create-note-header">

          <div className="create-note-icon">
            +
          </div>

          <div>

            <span className="create-note-label">
              NEW NOTE
            </span>

            <h1>
              Create a new note
            </h1>

            <p>
              Put your thoughts, ideas, and reminders
              somewhere safe.
            </p>

          </div>

        </div>

        {/* Display validation or API errors */}
        {error && (

          <div className="note-error">

            <span>!</span>

            {error}

          </div>

        )}

        {/* Display confirmation after successful creation */}
        {success && (

          <div className="success-message">

            <span>✓</span>

            {success}

          </div>

        )}

        {/* Note creation form */}
        <form
          className="note-form"
          onSubmit={handleSubmit}
        >

          <div className="note-form-group">

            <label htmlFor="title">
              Title
            </label>

            <input
              id="title"
              type="text"
              value={title}
              onChange={(event) =>
                setTitle(event.target.value)
              }
              placeholder="Give your note a title..."
              disabled={loading}
            />

            <small>
              Keep it short and meaningful.
            </small>

          </div>

          <div className="note-form-group">

            <label htmlFor="body">
              Your Note
            </label>

            <textarea
              id="body"
              value={body}
              onChange={(event) =>
                setBody(event.target.value)
              }
              placeholder="Start writing your thoughts..."
              disabled={loading}
            />

            <small>
              Everything important can live here.
            </small>

          </div>

          {/* Submit and navigation actions */}
          <div className="note-form-actions">

            <button
              type="submit"
              className="note-submit-button"
              disabled={loading}
            >

              {loading
                ? "Creating..."
                : "Create Note"}

              {!loading && (
                <span>
                  →
                </span>
              )}

            </button>

            {onBack && (

              <button
                type="button"
                className="back-button"
                onClick={onBack}
                disabled={loading}
              >
                Cancel
              </button>

            )}

          </div>

        </form>

      </div>

    </div>
  );
}

export default CreateNote;