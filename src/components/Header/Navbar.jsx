import React from "react";
import logo from "../../assets/images/logo.png";
import "../../App.css";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg container">
      <div className="container-fluid">

        {/* Top Row (Mobile View) */}
        <div className="d-flex justify-content-between align-items-center w-100 d-lg-none">
          
          {/* LEFT: Menu Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* RIGHT: Logo */}
          <a className="navbar-brand ms-auto" href="#">
            <img src={logo} alt="logo" width="45" height="40" />
          </a>
        </div>

        {/* Desktop Logo */}
        <a className="navbar-brand d-none d-lg-block" href="#">
          <img src={logo} alt="logo" width="45" height="40" />
        </a>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className={({isActive})=>isActive ? 'nav-link active text-primary fw-bold' : 'nav-link'}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/fixture" className={({isActive})=>isActive ? 'nav-link active text-primary fw-bold' : 'nav-link'}>Fixture</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/teams" className={({isActive})=>isActive ? 'nav-link active text-primary fw-bold' : 'nav-link'}>Teams</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/schedules" className={({isActive})=>isActive ? 'nav-link active text-primary fw-bold' : 'nav-link'}>Schedules</NavLink>
            </li>
          </ul>

          <button className="btn" type="submit">
            0 Coin 🪙
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;