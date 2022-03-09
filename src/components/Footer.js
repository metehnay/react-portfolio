import React from "react";
import "../assets/css/Footer.css";
import profile from "../assets/images/githubprofile.svg";
import linkedin from "../assets/images/linkedin.svg";

const Footer = () => {
  return (
    <div className="footer">
      <h2>Built & designed by Metehan</h2>
      <h3>Made with ♥</h3>
      <div className="social">
        <a href="https://github.com/metehnay">
          <img src={profile} id="git" alt="social" />
        </a>
        <img src={linkedin} id="linked" alt="social" />
      </div>
    </div>
  );
};

export default Footer;
