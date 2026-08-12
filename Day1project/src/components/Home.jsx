// Importing the portfolio image from the assets folder allows React
// to process and bundle the image correctly during the build process.
import portfolioImage from "../assets/portfolio.webp";


// Home component contains the main content of the portfolio,
// including the Hero, About, and Technical Skills sections.
function Home() {
  return (
    <main>

      {/* =========================
          HERO SECTION
      ========================= */}

      {/* 
        The Hero section is the first section visitors see.
        It introduces the portfolio owner, professional role,
        short description, and primary actions.
      */}
      <section id="home" className="hero">

        {/* 
          The container keeps the hero content aligned with
          the overall portfolio layout and controls its width.
        */}
        <div className="container hero-container">


          {/* =========================
              HERO CONTENT
          ========================= */}

          {/* 
            This area contains the textual introduction and
            call-to-action buttons.
          */}
          <div className="hero-content">

            {/* Short greeting creates an introductory context */}
            <p className="hero-greeting">
              Hello, I'm
            </p>


            {/* 
              The main heading identifies the portfolio owner.
              h1 is used because this is the primary heading
              of the page and establishes the document hierarchy.
            */}
            <h1>
              Hiba <span>Amin</span>
            </h1>


            {/* 
              Describes the professional role so visitors can
              immediately understand the primary area of expertise.
            */}
            <p className="hero-role">
              Computer Science Researcher & AI/ML Developer
            </p>


            {/* 
              Provides a concise professional summary.
              It gives visitors more context without requiring
              them to read the complete About section first.
            */}
            <p className="hero-description">
              MPhil Computer Science researcher passionate about Artificial
              Intelligence, Machine Learning, Data Science, and building
              practical software solutions.
            </p>


            {/* =========================
                CALL-TO-ACTION BUTTONS
            ========================= */}

            {/* 
              These buttons provide clear next actions for visitors.
              Internal anchor links allow users to move directly
              to relevant sections of the single-page portfolio.
            */}
            <div className="hero-buttons">

              {/* Takes visitors directly to the Projects section */}
              <a href="#projects" className="button button-primary">
                View My Projects
              </a>


              {/* Takes visitors directly to the Contact section */}
              <a href="#contact" className="button button-secondary">
                Contact Me
              </a>

            </div>


            {/* =========================
                PROFESSIONAL HIGHLIGHTS
            ========================= */}

            {/* 
              Quick highlights summarize the main professional
              areas without requiring visitors to read detailed text.
            */}
            <div className="hero-highlights">


              {/* AI/ML focus */}
              <div>
                <strong>AI/ML</strong>
                <span>Research & Development</span>
              </div>


              {/* Python focus */}
              <div>
                <strong>Python</strong>
                <span>Backend & Data Science</span>
              </div>


              {/* Academic background */}
              <div>
                <strong>MPhil</strong>
                <span>Computer Science</span>
              </div>


            </div>

          </div>


          {/* =========================
              HERO VISUAL
          ========================= */}

          {/* 
            Separating the visual from the textual content makes
            the two-column hero layout easier to style responsively.
          */}
          <div className="hero-visual">

            <div className="hero-image-wrapper">

              {/* 
                The alt text describes the image for screen-reader users.
                This is important for accessibility because users who
                cannot see the image can still understand its purpose.
              */}
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

      {/* 
        The About section provides more detailed information
        about the portfolio owner's background, interests,
        and professional direction.
      */}
      <section id="about" className="about">

        <div className="container">

          {/* 
            Reusable section-heading structure keeps the visual
            hierarchy consistent across different portfolio sections.
          */}
          <div className="section-heading">

            {/* Small supporting label */}
            <p>
              Get to know me
            </p>

            {/* 
              h2 is used because this is a major section heading
              below the page's main h1.
            */}
            <h2>
              About Me
            </h2>

          </div>


          {/* 
            Groups the About content so the paragraphs can be
            styled and arranged consistently.
          */}
          <div className="about-content">


            {/* 
              First paragraph focuses on academic background,
              technical experience, and the goal of building
              practical applications.
            */}
            <p className="about-text">
              I am a Computer Science researcher with an MPhil background and
              experience in Artificial Intelligence, Machine Learning, Data
              Science, and software development. I enjoy turning technical
              ideas into practical applications and continuously learning new
              technologies.
            </p>


            {/* 
              Second paragraph provides more specific information
              about research interests and technical areas.
            */}
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

      {/* 
        The Skills section gives visitors a quick overview
        of the technologies and technical areas covered by
        the portfolio owner.
      */}
      <section id="skills" className="skills">

        <div className="container">

          {/* 
            Uses the same section-heading structure as the About
            section to maintain visual consistency throughout the page.
          */}
          <div className="section-heading">

            <p>
              What I work with
            </p>

            <h2>
              Technical Skills
            </h2>

          </div>


          {/* 
            An unordered list is appropriate because skills are
            a collection of individual items without a required order.
          */}
          <ul className="skills-list">


            {/* Programming */}
            <li>Python</li>
            <li>JavaScript</li>


            {/* Frontend and backend development */}
            <li>React</li>
            <li>FastAPI</li>
            <li>Flask</li>
            <li>REST APIs</li>


            {/* AI and data-related skills */}
            <li>Machine Learning</li>
            <li>Deep Learning</li>
            <li>Computer Vision</li>
            <li>Data Science</li>


            {/* AI/ML libraries */}
            <li>TensorFlow</li>
            <li>OpenCV</li>
            <li>Pandas</li>
            <li>NumPy</li>


            {/* Database technologies */}
            <li>SQLAlchemy</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>SQLite</li>


            {/* Development and collaboration tools */}
            <li>Docker</li>
            <li>Git & GitHub</li>


          </ul>

        </div>
      </section>

    </main>
  );
}


// Exporting Home allows the component to be imported
// and rendered by the main application.
export default Home;