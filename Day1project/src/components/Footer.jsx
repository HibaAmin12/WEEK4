function Footer() {
  return (
    /*
      The footer represents the closing section of the portfolio
      and contains branding, navigation, social links, and copyright information.
    */
    <footer className="site-footer">

      {/* 
        Main footer container keeps all footer content aligned
        with the same page width used by the rest of the portfolio.
      */}
      <div className="container footer-container">

        {/* =========================
            FOOTER BRAND
        ========================= */}

        {/* 
          This area identifies the portfolio owner and provides
          a short description of her professional focus.
        */}
        <div className="footer-brand">

          {/* 
            Clicking the logo navigates back to the Home section.
            Using an internal anchor link avoids loading another page
            because the portfolio is structured as a single-page application.
          */}
          <a href="#home" className="footer-logo">

            {/* 
              A separate span is used for the logo mark so it can
              be styled independently from the full name.
            */}
            <span className="footer-logo-mark">
              H
            </span>

            {/* Portfolio owner's name */}
            <span>
              Hiba Amin
            </span>

          </a>


          {/* 
            Short description communicates the professional identity
            and focus of the portfolio.
          */}
          <p>
            AI & Computer Science enthusiast building
            practical and intelligent solutions.
          </p>

        </div>


        {/* =========================
            FOOTER NAVIGATION LINKS
        ========================= */}

        {/* 
          These links provide quick navigation to the main sections
          of the single-page portfolio.
        */}
        <div className="footer-links">

          {/* Navigates to the Home section */}
          <a href="#home">
            Home
          </a>

          {/* Navigates to the Projects section */}
          <a href="#projects">
            Projects
          </a>

          {/* Navigates to the Experience section */}
          <a href="#experience">
            Experience
          </a>

          {/* Navigates to the Contact section */}
          <a href="#contact">
            Contact
          </a>

        </div>


        {/* =========================
            SOCIAL LINKS
        ========================= */}

        {/* 
          This group contains external links to professional
          social profiles so visitors can explore more of the work.
        */}
        <div className="footer-socials">

          {/* 
            Opens the GitHub profile in a new browser tab.
            target="_blank" keeps the visitor on the portfolio page.
            rel="noreferrer" is used as a security/privacy measure
            when opening an external page in a new tab.
          */}
          <a
            href="https://github.com/HibaAmin12"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>


          {/* 
            LinkedIn profile link follows the same pattern as GitHub.
            Opening external profiles in a new tab provides convenient
            access without taking the visitor away from the portfolio.
          */}
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

      {/* 
        The bottom area separates copyright information from
        the main footer content and provides a clear ending to the page.
      */}
      <div className="footer-bottom">

        {/* 
          Reusing the common container keeps the copyright text
          aligned with the content above it.
        */}
        <div className="container">

          {/* 
            Copyright notice identifies ownership of the portfolio
            and indicates that the content is protected.
          */}
          <p>
            © 2026 Hiba Amin. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}


// Exporting Footer makes the component available to the main
// application so it can be rendered at the bottom of the portfolio.
export default Footer;