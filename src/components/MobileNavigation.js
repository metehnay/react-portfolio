import React, { useState } from "react";
import NavLinks from "./NavLinks";
import "../assets/css/Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import logo from "../assets/images/mobile-logo.png";
import DarkMode from "./DarkMode";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const burgerIcon = (
    <GiHamburgerMenu
      className="Hamburger"
      size="40px"
      color="var(--burges)"
      onClick={() => setOpen(!open)}
    />
  );
  const closeIcon = (
    <MdOutlineClose
      className="Hamburger"
      size="40px"
      color="var(--burges)"
      onClick={() => setOpen(!open)}
    />
  );

  const closeItem = () => setOpen(false);
  return (
    <nav className="mobile-navigation">
      <div className="burgers">{open ? closeIcon : burgerIcon}</div>
      <div className="c">
        <DarkMode id="d" />
      </div>
      <div className="logos"></div>

      {open && <NavLinks isMobile={true} closeItem={closeItem} />}
    </nav>
  );
};

export default MobileNavigation;
