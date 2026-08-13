import { useState } from "react";
import { registerUser } from "../services/auth";


// Registration page for creating a new user account.
function Register({ onLogin }) {

  // Store form input values.
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Manage request and feedback states.
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  // Validate the form and create a new account through the API.
  async function handleSubmit(event) {

    event.preventDefault();

    setError("");
    setSuccess("");


    // Prevent submitting incomplete credentials.
    if (!username.trim() || !password.trim()) {

      setError(
        "Username and password are required."
      );

      return;
    }


    // Apply the minimum password requirement on the client side.
    if (password.length < 6) {

      setError(
        "Password must be at least 6 characters."
      );

      return;
    }


    try {

      setLoading(true);

      // Send registration data to the authentication service.
      const newUser = await registerUser(
        username.trim(),
        password
      );


      // Confirm successful account creation.
      setSuccess(
        `Account "${newUser.username}" created successfully.`
      );


      // Clear the form after successful registration.
      setUsername("");
      setPassword("");

    } catch (err) {

      setError(
        err.message ||
        "Registration failed. Please try again."
      );

    } finally {

      setLoading(false);

    }

  }


  return (

    <div className="auth-page">

      <div className="auth-background-shape shape-one"></div>
      <div className="auth-background-shape shape-two"></div>

      <div className="auth-card">

        {/* Application branding. */}
        <div className="auth-brand">

          <div className="auth-brand-icon">
            📝
          </div>

          <div>
            <strong>Notes</strong>
            <span>Workspace</span>
          </div>

        </div>


        {/* Registration page introduction. */}
        <div className="auth-header">

          <span className="auth-label">
            GET STARTED
          </span>

          <h1>
            Create your
            <br />
            <span>personal space.</span>
          </h1>

          <p>
            Create an account and start keeping
            your thoughts organized.
          </p>

        </div>


        {/* Display registration errors returned by validation or the API. */}
        {error && (

          <div className="auth-error">

            <span>!</span>

            <p>
              {error}
            </p>

          </div>

        )}


        {/* Display successful account creation feedback. */}
        {success && (

          <div className="auth-success">

            <span>✓</span>

            <p>
              {success}
            </p>

          </div>

        )}


        {/* Registration form. */}
        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          <div className="auth-field">

            <label htmlFor="register-username">
              Username
            </label>

            <div className="auth-input-wrapper">

              <span>
                👤
              </span>

              <input
                id="register-username"
                type="text"
                value={username}
                onChange={(event) =>
                  setUsername(event.target.value)
                }
                placeholder="Choose a username"
                autoComplete="username"
                disabled={loading}
              />

            </div>

          </div>


          <div className="auth-field">

            <label htmlFor="register-password">
              Password
            </label>

            <div className="auth-input-wrapper">

              <span>
                🔒
              </span>

              <input
                id="register-password"
                type="password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                placeholder="Create a password"
                autoComplete="new-password"
                disabled={loading}
              />

            </div>

            <small>
              Use at least 6 characters.
            </small>

          </div>


          {/* Submit registration request. */}
          <button
            type="submit"
            className="auth-primary-button"
            disabled={loading}
          >

            {loading ? (

              <>
                <span className="button-spinner"></span>
                Creating account...
              </>

            ) : (

              <>
                Create Account
                <span>→</span>
              </>

            )}

          </button>

        </form>


        {/* Navigation separator. */}
        <div className="auth-divider">
          <span>OR</span>
        </div>


        {/* Allow existing users to return to login. */}
        <div className="auth-switch">

          <p>
            Already have an account?
          </p>

          <button
            type="button"
            onClick={onLogin}
            disabled={loading}
          >
            Back to Login
          </button>

        </div>


        {/* Security information shown to the user. */}
        <div className="auth-security">

          <span>
            🔐
          </span>

          Your account is protected securely

        </div>

      </div>

    </div>

  );

}


export default Register;