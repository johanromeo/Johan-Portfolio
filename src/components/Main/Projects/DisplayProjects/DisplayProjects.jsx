import "./DisplayProjects.css";

import ProjectCard from "../ProjectCard/ProjectCard";

// Array of projects
// img
// title
// overview
// description
const projects = [
  {
    id: 1,
    imgUrl: "/src/assets/plan-a-meal-project.svg",
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
    imgUrl: "/src/assets/school-project.svg",
    title: "School Projects",
    overview:
      "A list of all exercises and projects during my time at Campus Mölndal",
    description:
      "Here lives a chronological list of all the school exercises, projects and my thesis, going from implementing a text based RPG to implementing a secured cloud based backend for a webshop.",
    techUsed:
      "Java, Spring Boot, MySQL, MongoDB, Python, AWS, Azure, Raspberry Pi 5",
    githubUrl:
      "https://github.com/johanromeo/Campus-Molndal-School-Assignments",
  },
];

// Map projects to components
const projectComponents = projects.map((project) => {
  return <ProjectCard key={project.id} project={project} />;
});
//handle onClick function to navigate to each GitHub repo. Passed as a prop
const DisplayProjects = () => {
  return <div>{projectComponents}</div>;
};

export default DisplayProjects;
