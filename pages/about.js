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
      para: "Started studying Software Engineering and learn more technologies",
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
          Hi, my name is <strong>Guilherme</strong>, I am 19 years old and I
          am from Portugal, now living in Denmark, Horsens.
        </p>
        <p>I'm a passionate Full-Stack Developer, looking for an amazing company.</p>
        <p>I have developed 3 real-life projects and many academic ones.</p>
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
