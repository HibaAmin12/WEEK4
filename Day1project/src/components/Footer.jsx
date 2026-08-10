
function Footer() {
  return (
    <footer className="site-footer">

      <div className="container footer-container">

        {/* =========================
            FOOTER BRAND
        ========================= */}

        <div className="footer-brand">

          <a href="#home" className="footer-logo">
            <span className="footer-logo-mark">
              H
            </span>

            <span>
              Hiba Amin
            </span>
          </a>

          <p>
            AI & Computer Science enthusiast building
            practical and intelligent solutions.
          </p>

        </div>


        {/* =========================
            FOOTER LINKS
        ========================= */}

        <div className="footer-links">

          <a href="#home">
            Home
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#experience">
            Experience
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>


        {/* =========================
            SOCIAL LINKS
        ========================= */}

        <div className="footer-socials">

          <a
            href="https://github.com/HibaAmin12"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/hibaaminbutt"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </div>


      {/* =========================
          COPYRIGHT
      ========================= */}

      <div className="footer-bottom">

        <div className="container">

          <p>
            © 2026 Hiba Amin. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
