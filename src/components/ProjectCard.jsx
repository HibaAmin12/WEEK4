
function ProjectCard({
  title,
  description,
  technologies,
  image,
  link,
}) {
  return (
    <article className="project-card">

      {/* Project Image */}
      <div className="project-image">
        <img
          src={image}
          alt={`${title} project`}
        />
      </div>


      {/* Project Content */}
      <div className="project-card-content">

        <h3>{title}</h3>

        <p>{description}</p>


        {/* Technologies */}
        <ul className="project-technologies">
          {technologies.map((technology) => (
            <li key={technology}>
              {technology}
            </li>
          ))}
        </ul>


        {/* GitHub / Project Link */}
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          View Project →
        </a>

      </div>

    </article>
  );
}

export default ProjectCard;
