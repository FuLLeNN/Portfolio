import React, {useState} from "react";
import AboutStyles from "../styles/about.module.css";
import {motion} from "framer-motion";

import Year from "../components/Year";

const About = () => {
  const [year, setYear] = useState([
    {
      id: "1",
      numyear: "2018",
      para: "Start my journey",
    },
    {
      id: "2",
      numyear: "2019",
      para: "Learn technologies",
    },
    {
      id: "3",
      numyear: "2020",
      para: "Start doing full-stack academic projects",
    },
    {
      id: "4",
      numyear: "2021",
      para: "First Internship and some private projects",
    },
    {
      id: "5",
      numyear: "2022",
      para: "Start studying Software Engineering and learn more technologies",
    },
  ]);
  return (
    <motion.div
      animate={{x: 0, opacity: 1}}
      initial={{x: "100vw", opacity: 0}}
      transition={{
        delay: 0.15,
        duration: 0.5,
        type: "spring",
        stiffness: 130,
      }}
      exit="exit"
      variants={{
        exit: {
          x: "-100vw",
          transition: {ease: "easeInOut"},
        },
      }}
      className={AboutStyles.about}>
      <h1>About Me</h1>
      <div className={AboutStyles.text}>
        <p>
          Hi, my name is <strong>Guilherme</strong>, I am a 19-year-old software developer,
          currently living in Horsens, Denmark.
        </p>
        <p>I'm a passionate Full-Stack Developer with some experience, looking for an amazing company that challenges me daily.</p>
        <p>I have a Technical Degree in programming and I am currently in my 3rd semester of Software Engineering, which I expect to complete in 2025.</p>
        <br />
        <br />
        <div className={AboutStyles.yearslist}>
          {year.map((y) => {
            return <Year title={y.numyear} para={y.para} key={y.id} />;
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
