import './Resume.css';

import './Resume.css';

export default function Resume() {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "SQL",
        "MongoDB",
        "Python",
        "Git",
        "GitHub"
    ];

    return (
        <div className="resume">
            <div className="skills background">
                <h2>Skills</h2>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}