import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        symphoniQ <span style={{ fontWeight: 400, fontSize: "1rem" }}>(by QUAD)</span>
      </div>
      <div className="navbar-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/songs">Songs</NavLink>
        <NavLink to="/book-show">Book a Show</NavLink>
        
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;



//<NavLink to="/songs">Songs</NavLink>
//<NavLink to="/gallery">Gallery</NavLink>