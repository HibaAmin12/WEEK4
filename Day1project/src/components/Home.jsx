
import portfolioImage from "../assets/portfolio.webp";

function Home() {
  return (
    <main>
      {/* =========================
          HERO SECTION
      ========================= */}
      <section id="home" className="hero">
        <div className="container hero-container">
          {/* Hero content */}
          <div className="hero-content">
            <p className="hero-greeting">Hello, I'm</p>

            <h1>
              Hiba <span>Amin</span>
            </h1>

            <p className="hero-role">
              Computer Science Researcher & AI/ML Developer
            </p>

            <p className="hero-description">
              MPhil Computer Science researcher passionate about Artificial
              Intelligence, Machine Learning, Data Science, and building
              practical software solutions.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button button-primary">
                View My Projects
              </a>

              <a href="#contact" className="button button-secondary">
                Contact Me
              </a>
            </div>

            {/* Quick professional highlights */}
            <div className="hero-highlights">
              <div>
                <strong>AI/ML</strong>
                <span>Research & Development</span>
              </div>

              <div>
                <strong>Python</strong>
                <span>Backend & Data Science</span>
              </div>

              <div>
                <strong>MPhil</strong>
                <span>Computer Science</span>
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img
                src={portfolioImage}
                alt="Hiba Amin - AI and Machine Learning Developer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          ABOUT SECTION
      ========================= */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-heading">
            <p>Get to know me</p>
            <h2>About Me</h2>
          </div>

          <div className="about-content">
            <p className="about-text">
              I am a Computer Science researcher with an MPhil background and
              experience in Artificial Intelligence, Machine Learning, Data
              Science, and software development. I enjoy turning technical
              ideas into practical applications and continuously learning new
              technologies.
            </p>

            <p className="about-text">
              My interests include AI research, computer vision, edge AI,
              backend development, REST APIs, and building reliable software
              systems. I am particularly interested in developing solutions
              that connect research with real-world applications.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          SKILLS SECTION
      ========================= */}
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-heading">
            <p>What I work with</p>
            <h2>Technical Skills</h2>
          </div>

          <ul className="skills-list">
            <li>Python</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>FastAPI</li>
            <li>Flask</li>
            <li>REST APIs</li>
            <li>Machine Learning</li>
            <li>Deep Learning</li>
            <li>Computer Vision</li>
            <li>Data Science</li>
            <li>TensorFlow</li>
            <li>OpenCV</li>
            <li>Pandas</li>
            <li>NumPy</li>
            <li>SQLAlchemy</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>SQLite</li>
            <li>Docker</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Home;
