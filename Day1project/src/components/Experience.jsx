function Experience() {
  return (
    // The section represents the complete professional experience area
    // of the portfolio and can be accessed directly using the "experience" id.
    <section id="experience" className="experience-section">

      {/* 
        The container keeps the experience content centered and maintains
        the same maximum width used by other portfolio sections.
      */}
      <div className="container">

        {/* =========================
            SECTION HEADING
        ========================= */}

        {/* 
          This wrapper groups the section label, heading, and description.
          Separating the heading from the experience cards makes the structure
          easier to understand and allows independent styling.
        */}
        <div className="experience-heading">

          {/* Small section label that identifies this part of the portfolio */}
          <p className="section-tag">
            EXPERIENCE
          </p>

          {/* Main heading that introduces the professional experience */}
          <h2>
            Internship Experience
          </h2>

          {/* 
            Provides context about what type of experience is
            presented in this section.
          */}
          <p>
            Professional experience and practical work completed
            during my internships.
          </p>

        </div>


        {/* =========================
            EXPERIENCE LIST
        ========================= */}

        {/* 
          Contains all internship entries.
          A separate wrapper is used so multiple experience cards
          can be arranged and styled consistently.
        */}
        <div className="experience-list">


          {/* =========================
              10PEARLS EXPERIENCE
          ========================= */}

          {/* 
            Each internship is represented as an article because it is
            a self-contained piece of professional information.
            Using <article> also gives the content a meaningful semantic structure.
          */}
          <article className="experience-card">


            {/* 
              The top area groups the company name, job title,
              and internship duration into one visual header.
            */}
            <div className="experience-top">


              <div>

                {/* Company where the internship was completed */}
                <p className="experience-company">
                  10Pearls
                </p>

                {/* Role held during the internship */}
                <h3>
                  Data Science Intern
                </h3>

              </div>


              {/* 
                Displays the type of professional experience.
                Keeping this separate from the company information
                makes the card easier to scan visually.
              */}
              <span className="experience-duration">
                Internship
              </span>

            </div>


            {/* 
              Provides a high-level summary before the detailed
              responsibilities. This allows visitors to understand
              the overall work without reading every bullet point.
            */}
            <p className="experience-description">
              Worked on an end-to-end Air Quality Index prediction
              system involving data collection, machine learning,
              feature engineering, feature store integration, and
              dashboard development.
            </p>


            {/* 
              An unordered list is used because the internship involved
              multiple independent responsibilities and technical tasks.
              Each task is represented as a separate list item for readability.
            */}
            <ul className="experience-details">


              {/* API integration task */}
              <li>
                Integrated OpenWeather and WAQI APIs for weather
                and air quality data collection.
              </li>


              {/* Machine learning task */}
              <li>
                Built a machine learning workflow for air quality
                prediction.
              </li>


              {/* Feature store task */}
              <li>
                Used Hopsworks as a feature store for managing
                machine learning features.
              </li>


              {/* Dashboard development task */}
              <li>
                Developed an interactive Streamlit dashboard
                for displaying predictions and insights.
              </li>


              {/* Automation task */}
              <li>
                Used GitHub Actions for workflow automation.
              </li>


            </ul>


            {/* 
              Technology tags provide a quick visual summary of the
              tools and technologies used during this internship.
              This makes the technical stack easy to scan.
            */}
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
              ARHAMSOFT EXPERIENCE
          ========================= */}

          {/* 
            This article follows the same structure as the 10Pearls card.
            Reusing the same class names keeps both experience entries
            visually consistent and reduces unnecessary CSS duplication.
          */}
          <article className="experience-card">


            {/* 
              Groups the company, role, and internship type together
              so the most important information is immediately visible.
            */}
            <div className="experience-top">


              <div>

                {/* Company name */}
                <p className="experience-company">
                  ArhamSoft
                </p>

                {/* Internship role */}
                <h3>
                  AI Intern
                </h3>

              </div>


              {/* Experience type */}
              <span className="experience-duration">
                Internship
              </span>

            </div>


            {/* 
              Gives a concise overview of the technical work completed
              during the internship before listing individual tasks.
            */}
            <p className="experience-description">
              Worked on practical AI and software development tasks,
              including backend API development, database integration,
              authentication, containerization, and AI-focused
              application development.
            </p>


            {/* 
              Lists the main technical responsibilities separately.
              Using individual list items improves readability and
              allows visitors to quickly scan the work performed.
            */}
            <ul className="experience-details">


              {/* Backend API development */}
              <li>
                Developed a production-style Notes REST API using
                FastAPI.
              </li>


              {/* Authentication and authorization */}
              <li>
                Implemented JWT authentication and role-based
                authorization.
              </li>


              {/* Database integration */}
              <li>
                Worked with PostgreSQL and SQLAlchemy ORM for
                database management.
              </li>


              {/* Database migration management */}
              <li>
                Used Alembic for version-controlled database
                migrations.
              </li>


              {/* Application containerization */}
              <li>
                Containerized the application and PostgreSQL
                database using Docker and Docker Compose.
              </li>


            </ul>


            {/* 
              Shows the main technologies used during the ArhamSoft
              internship. These tags provide a quick overview of
              the technical stack.
            */}
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


// Exporting the Experience component allows it to be imported
// and rendered in the main portfolio application.
export default Experience;