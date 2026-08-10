function Header() {
  return (
    <header className="site-header">
      <div className="container header-container">

        {/* Logo / Personal Brand */}
        <a href="#home" className="logo">
          <span className="logo-mark">H</span>
          <span className="logo-name">Hiba Amin</span>
        </a>

        {/* Navigation */}
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* CV Button */}
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

export default Header;