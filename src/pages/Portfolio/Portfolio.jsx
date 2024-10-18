import Project from "../../components/Project/Project";
import projectData from "../../assets/data/myProjects.js";

import "./Portfolio.css";

export default function Portfolio() {
  return (
    <>
      <section className="projectContainer">
        {projectData.map((project, idx) => {
          return (
            <Project
              key={idx}
              name={project.name}
              image={project.image}
              github={project?.github}
              live={project.live}
            />
          );
        })}
      </section>
    </>
  );
}
