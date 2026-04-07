import React, { useState } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [activeNav, setActiveNav] = useState("Home");
  const navLinks = ["Home", "Services", "Shop", "About Us"];

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/paws.png" alt="PAW HAUS Logo" className="logo-image" />
        PAW HAUS
      </div>
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link}>
            <span
              className={`nav-link ${activeNav === link ? "active" : ""}`}
              onClick={() => setActiveNav(link)}
            >
              {link}
            </span>
          </li>
        ))}
      </ul>
      <button className="contact-btn">Contact Us</button>
    </nav>
  );
}
