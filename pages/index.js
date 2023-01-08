import BackgroundAnimation from "../components/Background";
import Projects from "../components/Projects";
import {motion} from "framer-motion";
import Link from "next/link";
import React, {useEffect} from "react";
import HomeStyles from "../styles/Home.module.css";
import Technologies from "../components/Technologies";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <motion.div
        className={HomeStyles.home}
        exit="exit"
        variants={{
          exit: {
            y: "100vw",
            transition: {ease: "easeInOut"},
          },
        }}>
        <div className={HomeStyles.introtext}>
          <motion.h1
            animate={{scale: 1, opacity: 1, y: "0"}}
            transition={{
              delay: 0.25,
              duration: 0.75,
              type: "spring",
              stiffness: 190,
            }}
            initial={{scale: 0, opacity: 0, y: "-100vh"}}>
            Welcome.
          </motion.h1>
          <motion.p
            animate={{scale: 1, opacity: 1}}
            transition={{delay: 0.5, duration: 0.75}}
            initial={{scale: 0, opacity: 0}}>
            Hi, this is my personal portfolio that was made in Next.js and here
            you can see more about me. <br />
            Below you can see my resume.
          </motion.p>
        </div>
        <Link href="/GuilhermeMiranda.pdf" passHref>
          <a target="_blank">
            <motion.button
              className={HomeStyles.glowonhover}
              animate={{scale: 1, opacity: 1}}
              transition={{delay: 0.5, duration: 0.75}}
              initial={{scale: 0, opacity: 0}}>
              My Resume
            </motion.button>
          </a>
        </Link>
        <br />
        <span className={HomeStyles.spanButton}>
          *Click to open the resume*
        </span>

        <BackgroundAnimation />
      </motion.div>

      <Projects />
      <Technologies />
      <Footer />
    </>
  );
}
