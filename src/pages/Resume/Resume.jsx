import './Resume.css';
import { IoLogoHtml5 , IoLogoCss3 , IoLogoJavascript , IoLogoReact , IoLogoNodejs , IoLogoPython , IoLogoGithub ,} from "react-icons/io5";
import { DiMysql } from "react-icons/di";
import { SiMongodb , SiGit } from "react-icons/si";


export default function Resume() {
    const skills = [
        { technology: "HTML" , icon: <IoLogoHtml5 /> },
        { technology: "CSS" , icon: <IoLogoCss3 /> },
        { technology: "JavaScript" , icon: <IoLogoJavascript /> },
        { technology: "React" , icon: <IoLogoReact /> },
        { technology: "Node.js" , icon: <IoLogoNodejs /> },
        { technology: "SQL" , icon: <DiMysql /> },
        { technology: "MongoDB" , icon: <SiMongodb /> },
        { technology: "Python" , icon: <IoLogoPython /> },
        { technology: "Git" , icon:<SiGit /> },
        { technology: "GitHub" , icon: <IoLogoGithub /> }
    ];
    return (
        <div className="resume">
            {/* <a href="" download><button>Download Resume</button></a> */}
            <div className="skills background">
                <h2>tech skills</h2>
                <div className='listedSkills'>
                    {skills.map((skill, index) => (
                        <div className='skill' key={index}>{skill.icon}{skill.technology}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}