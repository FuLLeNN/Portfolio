import React from "react";

import FooterStyles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={FooterStyles.footer}>
      <hr />
      <div className={FooterStyles.container}>
        <div className="firsttext">
          <h2>Phone Number</h2>
          <p>+45 50 33 76 04</p>
        </div>
        <div className="secondtext">
          <h2>Email</h2>
          <p>guilhermecm@sapo.pt</p>
        </div>
      </div>
      <div className={FooterStyles.secondcontainer}>
        <p>Making dreams come true.</p>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/guilherme-miranda-29139224b/"
              target="_blank">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/guimiranda_03/" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
