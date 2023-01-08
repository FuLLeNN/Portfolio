import React, {useState} from "react";

import TechStyles from "../styles/techns.module.css";

import Technologie from "./technologie";

const Technologies = () => {
  const [tech, setTech] = useState([
    {
      id: "1",
      tech: "fab fa-php",
      title: "Full-Stack",
      para: "Projects with Native PHP and CodeIgniter",
    },
    {
      id: "2",
      tech: "fab fa-java",
      title: "Back-End",
      para: "Developed API's with Spring Boot and Node.js",
    },
    {
      id: "3",
      tech: "fab fa-js",
      title: "Front-End",
      para: "Projects with React and React Native",
    },
    {
      id: "4",
      tech: "fab fa-aws",
      title: "Databases",
      para: "Developed Databases with MySQL",
    },
  ]);

  return (
    <div className={TechStyles.technologies} id="technologies">
      <h1>Technologies</h1>
      <p>
        I&apos;ve worked with various technologies, this is the main ones. I am
        more focused in Back-End projects.
      </p>

      <div className={TechStyles.techgroup}>
        {tech.map((t) => {
          return (
            <Technologie
              title={t.title}
              para={t.para}
              tech={t.tech}
              key={t.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
