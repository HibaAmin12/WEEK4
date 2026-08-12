function Header() {
  return (
    /*
      The header contains the main navigation and personal branding
      of the portfolio. It remains separate from the page content
      so visitors can easily move between different sections.
    */
    <header className="site-header">

      {/* 
        The common container keeps the header content aligned
        with the same width as the other portfolio sections.
      */}
      <div className="container header-container">


        {/* =========================
            LOGO / PERSONAL BRAND
        ========================= */}

        {/* 
          The logo represents the portfolio owner's personal brand.
          The internal anchor links to the Home section instead of
          loading another page because this is a single-page portfolio.
        */}
        <a href="#home" className="logo">

          {/* 
            The initial is placed in a separate span so it can
            be styled as a visual logo mark independently.
          */}
          <span className="logo-mark">
            H
          </span>

          {/* Full name provides clear identification of the portfolio owner */}
          <span className="logo-name">
            Hiba Amin
          </span>

        </a>


        {/* =========================
            MAIN NAVIGATION
        ========================= */}

        {/* 
          The nav element semantically groups the main navigation links.
          aria-label gives the navigation an accessible name so that
          screen-reader users can understand the purpose of this nav.
        */}
        <nav
          className="site-nav"
          aria-label="Main navigation"
        >

          {/* Each anchor navigates to a specific section of the same page */}
          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#experience">Experience</a>

          <a href="#contact">Contact</a>

        </nav>


        {/* =========================
            CV BUTTON
        ========================= */}

        {/* 
          Provides direct access to the CV.
          target="_blank" opens the PDF in a new browser tab,
          allowing visitors to view the CV without leaving the portfolio.
        */}
        <a
          href="/Hiba_Amin_CV.pdf"
          className="header-cv-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          View CV
        </a>


      </div>
    </header>
  );
}


// Exporting Header allows it to be imported and rendered
// in the main application layout.
export default Header;