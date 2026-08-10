
function Experience() {
  return (
    <section id="experience" className="experience-section">

      <div className="container">

        {/* =========================
            SECTION HEADING
        ========================= */}

        <div className="experience-heading">
          <p className="section-tag">EXPERIENCE</p>

          <h2>Internship Experience</h2>

          <p>
            Professional experience and practical work completed
            during my internships.
          </p>
        </div>


        {/* =========================
            EXPERIENCE TIMELINE
        ========================= */}

        <div className="experience-list">


          {/* =========================
              10PEARLS
          ========================= */}

          <article className="experience-card">

            <div className="experience-top">

              <div>
                <p className="experience-company">
                  10Pearls
                </p>

                <h3>
                  Data Science Intern
                </h3>
              </div>

              <span className="experience-duration">
                Internship
              </span>

            </div>


            <p className="experience-description">
              Worked on an end-to-end Air Quality Index prediction
              system involving data collection, machine learning,
              feature engineering, feature store integration, and
              dashboard development.
            </p>


            <ul className="experience-details">

              <li>
                Integrated OpenWeather and WAQI APIs for weather
                and air quality data collection.
              </li>

              <li>
                Built a machine learning workflow for air quality
                prediction.
              </li>

              <li>
                Used Hopsworks as a feature store for managing
                machine learning features.
              </li>

              <li>
                Developed an interactive Streamlit dashboard
                for displaying predictions and insights.
              </li>

              <li>
                Used GitHub Actions for workflow automation.
              </li>

            </ul>


            <div className="experience-technologies">

              <span>Python</span>
              <span>Machine Learning</span>
              <span>Streamlit</span>
              <span>Hopsworks</span>
              <span>APIs</span>
              <span>GitHub Actions</span>

            </div>

          </article>


          {/* =========================
              ARHAMSOFT
          ========================= */}

          <article className="experience-card">

            <div className="experience-top">

              <div>
                <p className="experience-company">
                  ArhamSoft
                </p>

                <h3>
                  AI Intern
                </h3>
              </div>

              <span className="experience-duration">
                Internship
              </span>

            </div>


            <p className="experience-description">
              Worked on practical AI and software development tasks,
              including backend API development, database integration,
              authentication, containerization, and AI-focused
              application development.
            </p>


            <ul className="experience-details">

              <li>
                Developed a production-style Notes REST API using
                FastAPI.
              </li>

              <li>
                Implemented JWT authentication and role-based
                authorization.
              </li>

              <li>
                Worked with PostgreSQL and SQLAlchemy ORM for
                database management.
              </li>

              <li>
                Used Alembic for version-controlled database
                migrations.
              </li>

              <li>
                Containerized the application and PostgreSQL
                database using Docker and Docker Compose.
              </li>

            </ul>


            <div className="experience-technologies">

              <span>Python</span>
              <span>FastAPI</span>
              <span>PostgreSQL</span>
              <span>SQLAlchemy</span>
              <span>JWT</span>
              <span>Docker</span>

            </div>

          </article>

        </div>

      </div>

    </section>
  );
}

export default Experience;

