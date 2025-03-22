
import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">CarbonCrunch</div>
    <div className="nav-links">
      <a href="#">Home</a>
      <a href="#">Services</a>
      <a href="#">Blog</a>
      <a href="#">About Us</a>
      <a href="#">Contact</a>
    </div>
    <div className="nav-buttons">
      <button className="login-btn">Login</button>
      <button className="book-demo-btn">Book Demo</button>
    </div>
  </nav>
);

export default Navbar;
