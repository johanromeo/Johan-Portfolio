import "./DisplayProjects.css";
import meal from "../../../../assets/meal.svg";
import school from "../../../../assets/school.svg";
import portfolio from "../../../../assets/portfolio.svg";
import ProjectCard from "../ProjectCard/ProjectCard";

const projects = [
  {
    id: 1,
    imgUrl: meal,
    title: "Plan a Meal",
    overview: "Knowing what to cook can sometimes be hard.",
    description:
      "Plan a Meal solves that problem by letting the user add provisions to their household, get AI-generated recipes and grocery shopping lists to their emails.",
    techUsed:
      "Java, Spring Boot, MySQL, HTML, CSS, JavaScript, Docker and Raspberry Pi 5.",
    githubUrl: "https://github.com/johanromeo/Plan-a-Meal",
  },
  {
    id: 2,
    imgUrl: school,
    title: "School Projects",
    overview:
      "A list of all exercises and projects during my time at Campus Mölndal",
    description:
      "Here lives a chronological list of all the school exercises, projects and my thesis, going from implementing a text based RPG to implementing a secured cloud based backend for a webshop.",
    techUsed:
      "Java, Spring Boot, MySQL, MongoDB, Python, AWS, Azure, Raspberry Pi 5.",
    githubUrl:
      "https://github.com/johanromeo/Campus-Molndal-School-Assignments",
  },
  {
    id: 3,
    imgUrl: portfolio,
    title: "Johan Portfolio",
    overview: "My minimalistic website portfolio.",
    description:
      "Developing a website portfolio has been on my mind for a while. This portfolio was ment to be very simple, yet express personality by adding a subtle color scheme. As you can see, I still need to learn alot, especially in CSS.",
    techUsed: "React.js, CSS.",
    githubUrl: "https://github.com/johanromeo/Johan-Portfolio",
  },
];

const projectComponents = projects.map((project) => {
  return <ProjectCard key={project.id} project={project} />;
});

const DisplayProjects = () => {
  return (
    <div className="project-components-container">{projectComponents}</div>
  );
};

export default DisplayProjects;
