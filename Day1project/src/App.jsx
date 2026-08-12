// Importing the global stylesheet so that the application's
// layout, components, colors, spacing, and responsive styles
// can be applied throughout the portfolio.
import "./App.css";


// Importing individual components.
// Each major part of the portfolio is separated into its own
// component so the application remains modular and maintainable.
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


// App is the main component that composes all major
// sections of the portfolio into one complete page.
function App() {
  return (

    /*
      React Fragment allows multiple components to be returned
      without adding an unnecessary wrapper element to the DOM.

      The components are arranged in the same order in which
      they should appear on the portfolio page.
    */
    <>

      {/* 
        Header contains the personal branding, navigation links,
        and CV button, so it is placed at the top of the page.
      */}
      <Header />


      {/* 
        Home contains the Hero, About, and Skills sections.
        It introduces the portfolio and provides the main
        information visitors see first.
      */}
      <Home />


      {/* 
        Projects displays the featured projects using
        reusable ProjectCard components.
      */}
      <Projects />


      {/* 
        Experience presents professional internship experience
        in a structured and consistent format.
      */}
      <Experience />


      {/* 
        Contact provides the form through which visitors
        can get in touch.
      */}
      <Contact />


      {/* 
        Footer contains secondary navigation, branding,
        social links, and copyright information.
      */}
      <Footer />

    </>
  );
}


// Exporting App allows the main entry file, such as main.jsx,
// to import and render the complete portfolio application.
export default App;