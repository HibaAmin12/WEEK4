// ==========================================================
// Edit Note Page
// ==========================================================

import { useState } from "react";

import { updateNote } from "../services/notes";

// Handles editing and updating an existing note.
function EditNote({
  note,
  token,
  onUpdated,
  onCancel,
}) {

  // Initialize form fields with the selected note's data.
  const [title, setTitle] = useState(
    note.title || ""
  );

  const [body, setBody] = useState(
    note.body || ""
  );

  // Manage request status and user feedback.
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Validate and submit the updated note.
  async function handleSubmit(event) {

    event.preventDefault();

    setError("");
    setSuccess("");

    // Prevent submission when required fields are empty.
    if (!title.trim() || !body.trim()) {

      setError(
        "Title and body are required."
      );

      return;
    }

    // Ensure the request has a valid authentication token.
    if (!token) {

      setError(
        "Authentication token is missing. Please login again."
      );

      return;
    }

    try {

      setLoading(true);

      // Prepare the updated data expected by the API.
      const noteData = {
        title: title.trim(),
        body: body.trim(),
        category_id: note.category_id ?? null,
      };

      // Send the authenticated update request.
      const updatedNote = await updateNote(
        token,
        note.id,
        noteData
      );

      setSuccess(
        `Note "${updatedNote.title}" updated successfully.`
      );

      // Notify the parent component about the updated note.
      if (onUpdated) {
        onUpdated(updatedNote);
      }

    } catch (err) {

      setError(
        err.message ||
        "Failed to update note."
      );

    } finally {

      setLoading(false);
    }
  }

  return (

    <div className="create-note-page">

      <div className="create-note-card">

        {/* Page heading and editing context */}
        <div className="create-note-header">

          <div className="create-note-icon">
            ✎
          </div>

          <div>

            <span className="create-note-label">
              EDIT NOTE
            </span>

            <h1>
              Edit your note
            </h1>

            <p>
              Update your note and keep your
              thoughts organized.
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

        {/* Display confirmation after successful update */}
        {success && (

          <div className="success-message">

            <span>✓</span>

            {success}

          </div>

        )}

        {/* Form for editing the selected note */}
        <form
          className="note-form"
          onSubmit={handleSubmit}
        >

          <div className="note-form-group">

            <label htmlFor="edit-title">
              Title
            </label>

            <input
              id="edit-title"
              type="text"
              value={title}
              onChange={(event) =>
                setTitle(event.target.value)
              }
              placeholder="Give your note a title..."
              disabled={loading}
            />

          </div>

          <div className="note-form-group">

            <label htmlFor="edit-body">
              Your Note
            </label>

            <textarea
              id="edit-body"
              value={body}
              onChange={(event) =>
                setBody(event.target.value)
              }
              placeholder="Update your note..."
              disabled={loading}
            />

          </div>

          {/* Save changes or cancel the editing operation */}
          <div className="note-form-actions">

            <button
              type="submit"
              className="note-submit-button"
              disabled={loading}
            >

              {loading
                ? "Saving..."
                : "Save Changes"}

              {!loading && (
                <span>
                  →
                </span>
              )}

            </button>

            <button
              type="button"
              className="back-button"
              onClick={onCancel}
              disabled={loading}
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default EditNote;