import React from "react";
import { Link, useLocation } from "react-router-dom";
import pawsLogo from "../../assets/paws.png";
import "./NavBar.css";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="nav-logo">
        <img src={pawsLogo} alt="Paw Haus" className="logo-img" />
        <span>PAW HAUS</span>
      </Link>

      {/* Menu Links */}
      <div className="nav-links">
        <Link
          to="/"
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/services"
          className={`nav-link ${location.pathname === "/services" ? "active" : ""}`}
        >
          Services
        </Link>
        <Link
          to="/shop"
          className={`nav-link ${location.pathname === "/shop" ? "active" : ""}`}
        >
          Shop
        </Link>
        <Link
          to="/about"
          className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
        >
          About Us
        </Link>
      </div>

      {/* Contact Us Button */}
      <Link to="/booking" className="contact-btn">
        Contact Us
      </Link>
    </nav>
  );
};

export default NavBar;