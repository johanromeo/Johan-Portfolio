import DisplayProjects from "./DisplayProjects/DisplayProjects";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 id="target-2" className="nav-active">
        Projects
      </h2>
      <DisplayProjects />
    </section>
  );
};

export default Projects;
