import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logoDark from "../../assets/logo-dark.png";
import logoLight from "../../assets/logo-light.png";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isLightPage = ["/shop", "/about", "/booking", "/contact", "/checkout"].some(
    (path) => location.pathname === path || location.pathname.startsWith("/product")
  );

  const navLinks = [
    { to: "/", label: "Home", end: true },
    { to: "/services", label: "Services" },
    { to: "/shop", label: "Shop" },
    { to: "/about", label: "About" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScrollY && current > 50) {
        setShow(false);
      } else {
        setShow(true);
      }

      setScrolled(current > 20);
      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    return () => document.body.classList.remove("nav-open");
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`navbar ${isLightPage ? "light" : "dark"} ${show ? "nav-show" : "nav-hide"} ${scrolled ? "scrolled" : ""}`}
      >
        <div className="nav-left">
          <button
            type="button"
            className={`hamburger ${isLightPage ? "hamburger-dark" : "hamburger-light"}`}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>

          <NavLink to="/" className="logo-link" onClick={() => window.scrollTo(0, 0)}>
            <img
              src={isLightPage ? logoDark : logoLight}
              alt="Paw Haus logo"
              className="logo"
            />
          </NavLink>
        </div>

        <div className="nav-center">
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-right">
          <NavLink to="/contact" className="btn btn-primary">
            Contact Us
          </NavLink>
        </div>
      </nav>

      <div
        className={`mobile-nav-backdrop ${menuOpen ? "is-open" : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        <aside
          className={`mobile-menu ${isLightPage ? "mobile-light" : "mobile-dark"} ${menuOpen ? "is-open" : ""}`}
          onClick={(e) => e.stopPropagation()}
          aria-hidden={!menuOpen}
        >
          <div className="mobile-menu-header">
            <button
              type="button"
              className="mobile-menu-close"
              aria-label="Close navigation menu"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className="mobile-menu-links">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={() => window.scrollTo(0, 0)}
              >
                {link.label}
              </NavLink>
            ))}

            <NavLink to="/contact" className="mobile-contact-btn btn btn-primary">
              Contact Us
            </NavLink>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Navbar;


