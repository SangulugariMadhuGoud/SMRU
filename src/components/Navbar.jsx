import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png'; // Adjust the path as necessary

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        {/* Logo Section */}
<div className="logo">
  <Link to="/" className="logo-link" onClick={closeMenu}>
    <img
      src={logo}
      alt="SMRU Logo"
      className="logo-img"
    />
  </Link>
</div>


        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/departments" onClick={closeMenu}>Departments</Link></li>
          <li><Link to="/admissions" onClick={closeMenu}>Admissions</Link></li>
          <li><Link to="/careers" onClick={closeMenu}>Careers</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>

        {/* Hamburger for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? 'rotate-top' : ''}`}></span>
          <span className={`bar ${isOpen ? 'hide-middle' : ''}`}></span>
          <span className={`bar ${isOpen ? 'rotate-bottom' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
