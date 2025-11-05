import React, { useState } from "react";
import "../styles/navbar.css";
import { FiMenu, FiX, FiUser, FiHeart, FiShoppingBag, FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        {/* LEFT: Logo */}
        <div className="nav-left">
          <a href="/" className="nav-brand">
            <img
              src="https://cdn-icons-png.flaticon.com/512/906/906343.png"
              alt="AppDost Logo"
              className="nav-logo-img"
            />
            <span className="nav-brand-text">APPSCRIP</span>
          </a>
        </div>

        {/* CENTER: Links (desktop) */}
        <nav className={`nav-center ${menuOpen ? "open" : ""}`}>
          <a href="#" className="nav-link">Shop</a>
          <a href="#" className="nav-link">Skills</a>
          <a href="#" className="nav-link">Stories</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Contact</a>
        </nav>

        {/* RIGHT: Icons */}
        <div className="nav-right">
          <FiSearch className="nav-icon" />
          <FiHeart className="nav-icon" />
          <FiShoppingBag className="nav-icon" />
          <FiUser className="nav-icon" />
        </div>

        {/* Mobile toggle */}
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen((s) => !s)}
          aria-label="menu"
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Mobile menu (slides down) */}
      <div className={`mobile-menu ${menuOpen ? "visible" : ""}`}>
        <a href="#" className="mobile-link" onClick={() => setMenuOpen(false)}>Shop</a>
        <a href="#" className="mobile-link" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#" className="mobile-link" onClick={() => setMenuOpen(false)}>Stories</a>
        <a href="#" className="mobile-link" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#" className="mobile-link" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </header>
  );
};

export default Navbar;
