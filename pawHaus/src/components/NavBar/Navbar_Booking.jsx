import React from "react";
import { Link } from "react-router-dom";
import pawsLogo2 from "../../assets/paws2.png";
import "./Navbar_Booking.css";

const NavBar_Booking = () => {
  return (
    <nav className="navbar-booking">
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
        <Link to="/shop" className="nav-link">
          Shop
        </Link>
        <Link to="/about" className="nav-link">
          About Us
        </Link>
      </div>

      {/* Contact Us Button */}
      <Link to="/booking" className="contact-btn active">
        Contact Us
      </Link>
    </nav>
  );
};

export default NavBar_Booking;
