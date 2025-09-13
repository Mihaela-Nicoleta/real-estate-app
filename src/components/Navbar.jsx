import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <h2>REAL ESTATE agency</h2>
      </Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/add">Adauga apartament</Link>
      </div>
    </nav>
  );
};

export default Navbar;
