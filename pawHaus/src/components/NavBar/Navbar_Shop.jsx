import React from "react";
import { Link } from "react-router-dom";
import pawsLogo2 from "../../assets/paws2.png";
import "./Navbar_Shop.css";

const NavBar_Shop = () => {
  return (
    <nav className="navbar-shop">
      {/* Logo */}
      <Link to="/" className="nav-logo">
        <img src={pawsLogo2} alt="Paw Haus" className="logo-img" />
        <span>PAW HAUS</span>
      </Link>

      {/* Menu Links */}
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/services" className="nav-link">
          Services
        </Link>
        <Link to="/shop" className="nav-link active">
          Shop
        </Link>
        <Link to="/about" className="nav-link">
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

export default NavBar_Shop;
