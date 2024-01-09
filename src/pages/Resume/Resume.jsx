import "./Resume.css";
import { DiMysql } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoPython,
  IoLogoGithub,
  IoLogoSass,
} from "react-icons/io5";
import {
  SiMongodb,
  SiGit,
  SiPostgresql,
  SiJquery,
  SiBootstrap,
  SiApollographql,
} from "react-icons/si";

export default function Resume() {
  const skills = [
    { technology: "HTML", icon: <IoLogoHtml5 /> },
    { technology: "CSS", icon: <IoLogoCss3 /> },
    { technology: "Sass", icon: <IoLogoSass /> },
    { technology: "Bootstrap", icon: <SiBootstrap /> },
    { technology: "JavaScript", icon: <IoLogoJavascript /> },
    { technology: "TypeScript", icon: <SiTypescript /> },
    { technology: "jQuery", icon: <SiJquery /> },
    { technology: "Python", icon: <IoLogoPython /> },
    { technology: "React", icon: <IoLogoReact /> },
    { technology: "Node.js", icon: <IoLogoNodejs /> },
    { technology: "MySQL", icon: <DiMysql /> },
    { technology: "PostgreSQL", icon: <SiPostgresql /> },
    { technology: "MongoDB", icon: <SiMongodb /> },
    { technology: "Apollo", icon: <SiApollographql /> },
    { technology: "Git", icon: <SiGit /> },
    { technology: "GitHub", icon: <IoLogoGithub /> },
  ];
  return (
    <div className="resume">
      {/* <a href="" download><button>Download Resume</button></a> */}
      <div className="skills background">
        <h2>tech skills</h2>
        <div className="listedSkills">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              {skill.icon}
              {skill.technology}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
