import React from "react";

import Link from "next/link";

import NavStyle from "../styles/nav.module.css";

import {motion} from "framer-motion";

const Nav = () => {
  return (
    <nav className={NavStyle.nav}>
      <motion.h1 drag>
        <motion.span
          animate={{opacity: 1}}
          initial={{opacity: 0}}
          transition={{
            delay: 0.25,
            duration: 0.5,
            type: "spring",
            stiffness: 150,
          }}>
          Guilherme
        </motion.span>
        <span> Miranda</span>
      </motion.h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <ul className={NavStyle.iconlinks}>
        <li>
          <a
            href="https://www.linkedin.com/in/guilherme-miranda-29139224b/"
            target="_blank">
            <i className="fab fa-github" target="_blank"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/guimiranda_03/" target="_blank">
            <i className="fab fa-instagram" target="_blank"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
