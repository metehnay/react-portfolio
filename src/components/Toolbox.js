import React from "react";
import Header from "./Header";
import { MdWavingHand } from "react-icons/md";
import "../assets/css/Toolbox.css";
import css from "../assets/images/css.svg";
import js from "../assets/images/js.svg";
import html from "../assets/images/html.svg";
import react from "../assets/images/react.svg";
import sass from "../assets/images/sass.svg";
import figma from "../assets/images/figma.svg";

const Toolbox = () => {
  return (
    <>
      <Header />
      <div className="welcome-container">
        <MdWavingHand className="ikon" />
        <h3 className="welcome">
          Hi! My name is Metehan.
          <p className="top">
            I'm a front-end web developer specializing in
            <span className="design" style={{ marginLeft: "5px" }}>
              ReactJS.
            </span>
          </p>
        </h3>
      </div>
      <div className="toolbox-container">
        <h2>My Toolbox</h2>
      </div>
      <div className="toolbox">
        <div className="grid-container">
          <div className="first">
            <img src={html} alt="toolbox" />
            <h4>HTML</h4>
          </div>
          <div className="second">
            <img src={css} alt="toolbox" />
            <h4>CSS</h4>
          </div>
          <div className="third">
            <img src={sass} alt="toolbox" />
            <h4>SASS</h4>
          </div>
          <div className="fourth">
            <img src={js} alt="toolbox" />
            <h4>JAVASCRIPT</h4>
          </div>
          <div className="fifth">
            <img src={react} alt="toolbox" />
            <h4>REACT</h4>
          </div>
          <div className="sixth">
            <img src={figma} alt="toolbox" />
            <h4>FIGMA</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toolbox;
