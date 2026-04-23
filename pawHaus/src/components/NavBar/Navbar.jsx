import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logoDark from "../../assets/logo-dark.png";
import logoLight from "../../assets/logo-light.png";
import "./Navbar.css";


function Navbar() {
 const location = useLocation();


 const isLightPage = ["/shop", "/about", "/booking", "/contact", "/checkout"].some(
   (path) =>
     location.pathname === path ||
     location.pathname.startsWith("/product")
 );


 const [show, setShow] = useState(true);
 const [lastScrollY, setLastScrollY] = useState(0);
 const [scrolled, setScrolled] = useState(false);


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


 return (
<nav
 className={`navbar
   ${isLightPage ? "light" : "dark"}
   ${show ? "nav-show" : "nav-hide"}
   ${scrolled ? "scrolled" : ""}
 `}
>
 <div className="nav-left">
   <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
     <img
       src={isLightPage ? logoDark : logoLight}
       alt="logo"
       className="logo"
     />
   </NavLink>
 </div>


 <div className="nav-center">
   <ul>
     <li>
       <NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""}>
         Home
       </NavLink>
     </li>


     <li>
       <NavLink to="/services" className={({ isActive }) => isActive ? "active-link" : ""}>
         Services
       </NavLink>
     </li>


     <li>
       <NavLink to="/shop" className={({ isActive }) => isActive ? "active-link" : ""}>
         Shop
       </NavLink>
     </li>


     <li>
       <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>
         About
       </NavLink>
     </li>
   </ul>
 </div>


 <div className="nav-right">
   <NavLink to="/contact" className="btn btn-primary">
     Contact Us
   </NavLink>
 </div>
</nav>
 );
}


export default Navbar;



