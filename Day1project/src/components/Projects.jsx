
import ProjectCard from "./ProjectCard";

// Import project images from assets
import notesApiImage from "../assets/notes.jpeg";
import aqiPredictorImage from "../assets/aqi.jpeg";
import imageForgeryImage from "../assets/ifdl.jpeg";



function Projects() {
  return (
    <section id="projects" className="projects-section">

      <div className="container">

        {/* =========================
            SECTION HEADING
        ========================= */}

        <div className="section-heading">

          <p className="section-tag">
            MY WORK
          </p>

          <h2>
            Featured Projects
          </h2>

          <p>
            Some of the projects, applications, and AI solutions
            I've built and worked on.
          </p>

        </div>


        {/* =========================
            PROJECT GRID
        ========================= */}

        <div className="project-grid">


          {/* =========================
              PROJECT 1
              ARHAMSOFT INTERNSHIP
          ========================= */}

          <ProjectCard
            title="Notes API"

            description="A production-style CRUD REST API developed during my ArhamSoft internship, featuring JWT authentication, role-based authorization, PostgreSQL, SQLAlchemy ORM, Alembic migrations, and Docker."

            technologies={[
              "FastAPI",
              "PostgreSQL",
              "SQLAlchemy",
              "JWT",
              "Alembic",
              "Docker",
            ]}

            image={notesApiImage}

            link="https://github.com/HibaAmin12/week3/tree/main/Day4project"
          />


          {/* =========================
              PROJECT 2
              10PEARLS INTERNSHIP
          ========================= */}

          <ProjectCard
            title="AQI Predictor"

            description="An end-to-end air quality prediction system developed during my Data Science internship at 10Pearls, integrating weather and air quality APIs with machine learning and an interactive Streamlit dashboard."

            technologies={[
              "Python",
              "Machine Learning",
              "Streamlit",
              "OpenWeather API",
              "WAQI API",
              "Hopsworks",
              "GitHub Actions",
            ]}

            image={aqiPredictorImage}

            link="https://github.com/HibaAmin12/aqi-data-logger"
          />


          {/* =========================
              PROJECT 3
              RESEARCH PROJECT
          ========================= */}

          <ProjectCard
            title="Image Forgery Detection & Localization"

            description="An AI-based computer vision system designed to detect and localize manipulated regions in images using deep learning, knowledge distillation, and edge deployment techniques."

            technologies={[
              "Python",
              "PyTorch",
              "Deep Learning",
              "Computer Vision",
              "Knowledge Distillation",
              "Edge AI",
            ]}

            image={imageForgeryImage}

            link="https://github.com/"
          />


      
        </div>

      </div>

    </section>
  );
}

export default Projects;
