import React from "react";
import { Link } from "react-router-dom";
import pawsLogo2 from "../../assets/paws2.png";
import "./Navbar_About.css";

const NavBar_About = () => {
  return (
    <nav className="navbar-about">
      <Link to="/" className="nav-logo">
        <img src={pawsLogo2} alt="Paw Haus" className="logo-img" />
        <span>PAW HAUS</span>
      </Link>

      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/shop" className="nav-link">Shop</Link>
        <Link to="/about" className="nav-link active">About Us</Link>
      </div>

      <Link to="/contact" className="contact-btn">
        Contact Us
      </Link>
    </nav>
  );
};

export default NavBar_About;