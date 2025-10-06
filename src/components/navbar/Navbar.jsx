import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // ✅ Correct import

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="navbar-container">
      {/* Top Bar */}
      <div className="top-bar">
        <p>CrossFit Gym in Denver, Colorado</p>
        <span>Jon: (123) 456 7890</span>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-section">
          <img
            src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/6255ed3eded8d1889d5dd8cf_crossfit%20gym%20logo.svg"
            alt="logo"
          />
        </div>

        {/* Nav Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {/* Gym Benefits Dropdown */}
          <div className="dropdown">
            <NavLink to="/benefits" className="dropbtn" onClick={toggleDropdown}>
              Gym Benefits ▾
            </NavLink>

            <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
              <HashLink
                smooth
                to="/benefits#crossfit"
                onClick={() => setDropdownOpen(false)}
              >
                CrossFit Classes
              </HashLink>

              <HashLink
                smooth
                to="/benefits#strength"
                onClick={() => setDropdownOpen(false)}
              >
                Strength Training
              </HashLink>

              <HashLink
                smooth
                to="/benefits#personal"
                onClick={() => setDropdownOpen(false)}
              >
                Personal Training
              </HashLink>

              <HashLink
                smooth
                to="/benefits#member"
                onClick={() => setDropdownOpen(false)}
              >
                Member Events
              </HashLink>
            </div>
          </div>

          <NavLink to="/membership" onClick={() => setMenuOpen(false)}>
            Membership
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>

          <button className="free-trial-btn">Start 7 Day Free Trial</button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
