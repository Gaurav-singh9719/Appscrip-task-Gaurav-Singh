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
              alt="Appscrip Logo"
              className="nav-logo-img"
            />
            <span className="nav-brand-text">APPSCRIP</span>
          </a>
        </div>

        {/* CENTER: Links (desktop) */}
        <nav className={`nav-center ${menuOpen ? "open" : ""}`}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="/shop" className="nav-link">Shop</a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="/skills" className="nav-link">Skills</a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="/stories" className="nav-link">Stories</a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="/about" className="nav-link">About</a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="/contact" className="nav-link">Contact</a>
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

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "visible" : ""}`}>
        <a href="/shop" className="mobile-link" onClick={() => setMenuOpen(false)}>Shop</a>
        <a href="/skills" className="mobile-link" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="/stories" className="mobile-link" onClick={() => setMenuOpen(false)}>Stories</a>
        <a href="/about" className="mobile-link" onClick={() => setMenuOpen(false)}>About</a>
        <a href="/contact" className="mobile-link" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </header>
  );
};

export default Navbar;
