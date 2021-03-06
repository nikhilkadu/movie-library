import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">Amazing Movies</span>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-link nav-item" to="/movies">
            Movies
          </NavLink>
          <NavLink className="nav-link nav-item" to="/customers">
            Customers
          </NavLink>
          <NavLink className="nav-link nav-item" to="/rentals">
            Rentals
          </NavLink>
          <NavLink className="nav-link nav-item" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-link nav-item" to="/register">
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
