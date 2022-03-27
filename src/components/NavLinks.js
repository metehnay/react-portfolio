import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/images/logo-mete.png";
import { motion } from "framer-motion";
import MobileNavigation from "./MobileNavigation";
import DarkMode from "./DarkMode";
import vimeo from "./vimeo.png";

const NavLinks = ({ isMobile, closeItem }) => {
  const animateForm = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <>
      <div className="logo-container">
        <div id="logo"></div>
      </div>
      <div className="statu">
        <div className="time">
          {" "}
          <DarkMode id="darko" />
        </div>
        <i className="status"></i>
        <p className="status-text ">
          Currently working at: <span className="working">AJXB.NET</span>{" "}
        </p>
      </div>

      <ul className="ul">
        <motion.div
          initial={animateForm}
          animate={animateTo}
          transition={{ delay: 0.05 }}
        >
          <li>
            <Link
              to="design"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => isMobile && closeItem(false)}
            >
              Tools
            </Link>
          </li>
        </motion.div>

        <motion.div
          initial={animateForm}
          animate={animateTo}
          transition={{ delay: 0.1 }}
        >
          <li>
            {" "}
            <Link
              to="sixth"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => isMobile && closeItem(false)}
            >
              Portfolio
            </Link>
          </li>
        </motion.div>
        <motion.div
          initial={animateForm}
          animate={animateTo}
          transition={{ delay: 0.1 }}
        >
          <li
            initial={animateForm}
            animate={animateTo}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="talk"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => isMobile && closeItem(false)}
            >
              Contact
            </Link>
          </li>
        </motion.div>
      </ul>
    </>
  );
};

export default NavLinks;
