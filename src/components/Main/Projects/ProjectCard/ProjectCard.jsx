import "./ProjectCard.css";

import Button from "../../../common/Button/Button";

const ProjectCard = ({ project }) => {
  return (
    <article className="project-card-container">
      <div className="project-card-img">
        <img src={project.imgUrl} alt="Project image" />
      </div>
      <div className="project-card-text">
        <h3>{project.title}</h3>
        <p>{project.overview}</p>
        <p>{project.description}</p>
        <p>
          <strong>Technologies used: </strong>
          {project.techUsed}
        </p>
        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          <Button text={"GitHub repo"} />
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
