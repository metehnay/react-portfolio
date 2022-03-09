import React from "react";
import "../assets/css/Header.css";
import { Link } from "react-scroll";
import NavLinks from "./NavLinks";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <nav className="Navbar">
      <Navigation />
      <MobileNavigation />
    </nav>
  );
};

export default Header;
