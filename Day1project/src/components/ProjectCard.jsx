// ProjectCard is a reusable component used to display
// one project in a consistent card layout.
// Project information is received through props so the same
// component can be reused for multiple projects.
function ProjectCard({
  title,
  description,
  technologies,
  image,
  link,
}) {
  return (
    // <article> is used because each project is a self-contained
    // piece of information within the Projects section.
    <article className="project-card">


      {/* =========================
          PROJECT IMAGE
      ========================= */}

      {/* 
        This wrapper separates the visual part of the project
        from its textual information, making the card easier
        to structure and style.
      */}
      <div className="project-image">

        {/* 
          The image source comes from the image prop, which allows
          every project card to display its own project image.

          The dynamic alt text improves accessibility by giving
          screen-reader users a meaningful description of the image.
        */}
        <img
          src={image}
          alt={`${title} project`}
        />

      </div>


      {/* =========================
          PROJECT CONTENT
      ========================= */}

      {/* 
        This container groups the project's title, description,
        technologies, and external project link together.
      */}
      <div className="project-card-content">


        {/* 
          The title is received through props, so the same
          ProjectCard component can display different projects.
        */}
        <h3>
          {title}
        </h3>


        {/* 
          Displays a short explanation of what the project does.
          The content is dynamic and comes from the description prop.
        */}
        <p>
          {description}
        </p>


        {/* =========================
            TECHNOLOGIES
        ========================= */}

        {/* 
          An unordered list is appropriate because technologies
          are a collection of items without a required sequence.
        */}
        <ul className="project-technologies">

          {/* 
            map() converts each technology from the technologies
            array into a separate <li> element.

            This avoids manually writing the same HTML for every
            technology and makes the component reusable for projects
            with different technology stacks.
          */}
          {technologies.map((technology) => (

            // React requires a unique key for each item in a
            // dynamically rendered list so it can efficiently
            // track changes to the list.
            <li key={technology}>
              {technology}
            </li>

          ))}

        </ul>


        {/* =========================
            PROJECT LINK
        ========================= */}

        {/* 
          Provides access to the project's GitHub repository
          or live project using the link received through props.
        */}
        <a
          href={link}

          // Opens the external project in a new browser tab
          // so the visitor can return to the portfolio easily.
          target="_blank"

          // Prevents the newly opened page from getting
          // unnecessary access to the originating window.
          rel="noreferrer"

          className="project-link"
        >
          View Project →
        </a>


      </div>

    </article>
  );
}


// Exporting ProjectCard allows other components, such as
// the Projects section, to import and reuse this component.
export default ProjectCard;