import React from "react";
import { Link } from "react-router-dom";
import pawsLogo from "../../assets/paws.png";
import "./Navbar_Home.css";

const NavBar_Home = () => {
  return (
    <nav className="navbar-home">
      {/* Logo */}
      <Link to="/" className="nav-logo">
        <img src={pawsLogo} alt="Paw Haus" className="logo-img" />
        <span>PAW HAUS</span>
      </Link>

      {/* Menu Links */}
      <div className="nav-links">
        <Link to="/" className="nav-link active">
          Home
        </Link>
        <Link to="/services" className="nav-link">
          Services
        </Link>
        <Link to="/shop" className="nav-link">
          Shop
        </Link>
        <Link to="/about" className="nav-link">
          About Us
        </Link>
      </div>

      {/* Contact Us Button */}
      <Link to="/contact" className="contact-btn">
        Contact Us
      </Link>
    </nav>
  );
};

export default NavBar_Home;
