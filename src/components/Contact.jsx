
function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="container">

        {/* =========================
            SECTION HEADING
        ========================= */}

        <div className="contact-heading">

          <p className="section-tag">
            CONTACT
          </p>

          <h2>
            Let's Work Together
          </h2>

          <p>
            Have a project idea, collaboration opportunity,
            or just want to say hello? I'd love to hear from you.
          </p>

        </div>


        {/* =========================
            CONTACT FORM
        ========================= */}

        <form method="post" className="contact-form">

          {/* Name */}

          <div className="form-group">

            <label htmlFor="name">
              Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />

          </div>


          {/* Email */}

          <div className="form-group">

            <label htmlFor="email">
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              required
            />

          </div>


          {/* Subject */}

          <div className="form-group">

            <label htmlFor="subject">
              Subject
            </label>

            <select
              id="subject"
              name="subject"
              required
            >

              <option value="">
                Select a subject
              </option>

              <option value="project">
                Project Inquiry
              </option>

              <option value="collaboration">
                Collaboration
              </option>

              <option value="general">
                General Message
              </option>

            </select>

          </div>


          {/* Message */}

          <div className="form-group">

            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows="6"
              minLength="10"
              placeholder="Tell me about your project or idea..."
              required
            ></textarea>

          </div>


          {/* Updates Checkbox */}

          <div className="checkbox-option">

            <input
              type="checkbox"
              id="updates"
              name="updates"
            />

            <label htmlFor="updates">
              Send me occasional updates
            </label>

          </div>


          {/* Preferred Contact */}

          <fieldset>

            <legend>
              Preferred contact method
            </legend>

            <div className="radio-option">

              <input
                type="radio"
                id="contact-email"
                name="preferredContact"
                value="email"
                required
              />

              <label htmlFor="contact-email">
                Email
              </label>

            </div>


            <div className="radio-option">

              <input
                type="radio"
                id="contact-phone"
                name="preferredContact"
                value="phone"
              />

              <label htmlFor="contact-phone">
                Phone
              </label>

            </div>

          </fieldset>


          {/* Submit Button */}

          <button
            type="submit"
            className="button button-primary submit-button"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;

