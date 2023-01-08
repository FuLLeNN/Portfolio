import React from "react";

import {motion} from "framer-motion";
import ContactStyles from "../styles/contact.module.css";

const contact = () => {
  return (
    <motion.div
      className={ContactStyles.contact}
      animate={{y: 0, opacity: 1}}
      initial={{y: "100vw", opacity: 0}}
      transition={{
        delay: 0.15,
        duration: 0.5,
        type: "spring",
        stiffness: 130,
      }}
      exit="exit"
      variants={{
        exit: {
          y: "100vw",
          transition: {ease: "easeInOut"},
        },
      }}>
      <motion.div className={ContactStyles.contact1}>
        <h1>Let's work together...</h1>
        <p>How do you take your coffee?</p>
        <motion.div className={ContactStyles.links}>
          <a href="https://www.instagram.com/guimiranda_03/" target="_blank">
            <i class="fab fa-instagram"></i>Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/guilherme-miranda-29139224b/"
            id="profile-link"
            target="_blank">
            <i class="fab fa-github"></i>Github
          </a>
          <a href="mailto:guilhermecm@sapo.pt">
            <i class="fa fa-at"></i>Send a mail
          </a>
          <a href="tel:+4550337604">
            <i class="fa fa-mobile"></i>Call me
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default contact;
