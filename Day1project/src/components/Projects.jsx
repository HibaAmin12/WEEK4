// Importing the reusable ProjectCard component.
// Instead of writing the complete project-card structure
// repeatedly, Projects can pass different project data to this component.
import ProjectCard from "./ProjectCard";


// Importing project images from the assets folder.
// Keeping images as imported assets allows React to manage them
// correctly during the build process.
import notesApiImage from "../assets/notes.jpeg";
import aqiPredictorImage from "../assets/aqi.jpeg";
import imageForgeryImage from "../assets/ifdl.jpeg";


// Projects component displays the featured projects
// in a consistent and reusable card-based layout.
function Projects() {
  return (

    // Semantic section identifies the Projects area of the portfolio.
    <section id="projects" className="projects-section">

      {/* 
        The common container keeps the Projects section aligned
        with the same width used throughout the portfolio.
      */}
      <div className="container">


        {/* =========================
            SECTION HEADING
        ========================= */}

        {/* 
          This heading introduces the purpose of the section
          before displaying the individual project cards.
        */}
        <div className="section-heading">

          {/* Small label provides additional visual context */}
          <p className="section-tag">
            MY WORK
          </p>


          {/* 
            h2 is used because Projects is a major section
            under the main page heading.
          */}
          <h2>
            Featured Projects
          </h2>


          {/* 
            Provides a short overview of the type of work
            presented in this section.
          */}
          <p>
            Some of the projects, applications, and AI solutions
            I've built and worked on.
          </p>

        </div>


        {/* =========================
            PROJECT GRID
        ========================= */}

        {/* 
          This wrapper contains all project cards.
          The grid layout is handled through CSS so that multiple
          projects can be displayed in an organized and responsive way.
        */}
        <div className="project-grid">


          {/* =========================
              PROJECT 1
              ARHAMSOFT INTERNSHIP
          ========================= */}

          {/* 
            ProjectCard is reused instead of creating a separate
            HTML structure for every project.

            Project-specific information is passed through props,
            while the ProjectCard component handles the common UI.
          */}
          <ProjectCard

            // Project title displayed as the card heading.
            title="Notes API"


            // Short description explains the project's purpose
            // and the major technologies/features implemented.
            description="A production-style CRUD REST API developed during my ArhamSoft internship, featuring JWT authentication, role-based authorization, PostgreSQL, SQLAlchemy ORM, Alembic migrations, and Docker."


            // Array contains the technologies used in this project.
            // ProjectCard dynamically converts these items into
            // individual technology list elements using map().
            technologies={[
              "FastAPI",
              "PostgreSQL",
              "SQLAlchemy",
              "JWT",
              "Alembic",
              "Docker",
            ]}


            // Passing the imported image allows the reusable
            // ProjectCard component to display the correct project image.
            image={notesApiImage}


            // Link provides access to the project's GitHub repository.
            link="https://github.com/HibaAmin12/week3/tree/main/Day4project"
          />


          {/* =========================
              PROJECT 2
              10PEARLS INTERNSHIP
          ========================= */}

          {/* 
            The same ProjectCard component is reused for the AQI project.
            Only the data changes, which demonstrates component reusability
            and avoids duplicating the card's HTML structure.
          */}
          <ProjectCard

            title="AQI Predictor"


            // Describes the project and highlights its
            // main data-science and machine-learning workflow.
            description="An end-to-end air quality prediction system developed during my Data Science internship at 10Pearls, integrating weather and air quality APIs with machine learning and an interactive Streamlit dashboard."


            // Technology stack specific to the AQI project.
            technologies={[
              "Python",
              "Machine Learning",
              "Streamlit",
              "OpenWeather API",
              "WAQI API",
              "Hopsworks",
              "GitHub Actions",
            ]}


            // Project-specific image passed to the reusable card.
            image={aqiPredictorImage}


            // Repository link for the AQI project.
            link="https://github.com/HibaAmin12/aqi-data-logger"
          />


          {/* =========================
              PROJECT 3
              RESEARCH PROJECT
          ========================= */}

          {/* 
            Again, the same reusable component is used.
            This keeps the visual structure consistent while allowing
            completely different project information.
          */}
          <ProjectCard

            title="Image Forgery Detection & Localization"


            // Summarizes the research project and identifies
            // the major AI techniques used.
            description="An AI-based computer vision system designed to detect and localize manipulated regions in images using deep learning, knowledge distillation, and edge deployment techniques."


            // Research project's technical stack and key concepts.
            technologies={[
              "Python",
              "PyTorch",
              "Deep Learning",
              "Computer Vision",
              "Knowledge Distillation",
              "Edge AI",
            ]}


            // Project-specific research image.
            image={imageForgeryImage}


            // Link to the project's repository.
            link="https://github.com/"
          />


        </div>

      </div>

    </section>
  );
}


// Exporting Projects allows the component to be imported
// and rendered as part of the main portfolio application.
export default Projects;