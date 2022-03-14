import React, { useState } from "react";
import Toolbox from "./Toolbox";
import "../assets/css/Projects.css";
import github from "../assets/images/github.svg";
import visit from "../assets/images/visit.svg";
import donut from "../assets/images/donuts.jpg";
import Footer from "./Footer";
import Contact from "./Contact";

const Projects = () => {
  return (
    <>
      <Toolbox />
      <div className="projects-container">
        <h2>My Projects</h2>
      </div>

      <div className="projects">
        <div className="project1">
          <h2>Back To The 90's</h2>

          <div className="button-container">
            <a
              href="https://github.com/metehnay/react-back-to-the-90s"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <button>
                <img src={github} id="icon" alt="github" />
              </button>
            </a>
            <a
              href="https://backtothe-90s.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={visit} alt="business" id="icon" />
            </a>

            <img
              src="https://user-images.githubusercontent.com/99619400/155811273-ddc59a35-3475-41e1-979d-ed128c6ab1ee.gif"
              id="img"
              alt="git"
            />
          </div>
        </div>
        <div className="project1">
          <h2>API World</h2>

          <div className="button-container">
            <a
              href="https://github.com/metehnay/react-api-world"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <button>
                <img src={github} id="icon" alt="github" />
              </button>
            </a>
            <a
              href="https://api-worldd.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={visit} alt="business" id="icon" />
            </a>

            <img
              src="https://user-images.githubusercontent.com/99619400/156410042-5923fe08-2d74-4b1f-8a14-c98f51842bc0.gif"
              id="img"
              alt="git"
            />
          </div>
        </div>
        <div className="project1">
          <h2>Tasty Donuts</h2>

          <div className="button-container">
            <a
              href="https://github.com/metehnay/react-tasty-donuts"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <button>
                <img src={github} id="icon" alt="github" />
              </button>
            </a>
            <a
              href="https://tastydonuts.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={visit} alt="business" id="icon" />
            </a>

            <img src={donut} id="img" alt="git" />
          </div>
        </div>

        <div className="project1">
          <h2>Landing Restaurant Website</h2>
          <div className="button-container">
            <button>
              <a
                href="https://github.com/metehnay/react-restaurant"
                rel="noreferrer"
                target="_blank"
              >
                <img src={github} id="icon" alt="github" />
              </a>
            </button>
            <a
              href="https://focused-aryabhata-a9d65e.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={visit} alt="site resturant" id="icon" />
            </a>
            <img
              src="https://user-images.githubusercontent.com/80966939/152065736-c4152b56-9a7d-4682-bcd5-221a9be0eda2.gif"
              id="img"
              alt="git"
            />
          </div>
          <div className="project1">
            <h2>Business Website</h2>
            <div className="button-container">
              <a
                href="https://github.com/metehnay/react-business-website"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <button>
                  <img src={github} id="icon" alt="github" />
                </button>
              </a>
              <a
                href="https://agitated-hamilton-3689a6.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={visit} alt="business" id="icon" />
              </a>
              <img
                src="https://user-images.githubusercontent.com/80966939/153208885-eba4b46f-3bc3-4f75-a421-1d4df9e44ab4.gif"
                id="img"
                alt="git"
              />
            </div>
          </div>
        </div>
      </div>
      <Contact />

      <Footer />
    </>
  );
};

export default Projects;
