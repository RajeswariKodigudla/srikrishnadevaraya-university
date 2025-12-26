import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      {/* OVERLAY */}
      {mobileOpen && (
        <div
          className="menu-overlay"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <nav className="navbar">
        {/* MOBILE HEADER */}
        <div className="mobile-header">
          <span className="mobile-title">Menu</span>
          <button
            className="hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>
        </div>

        {/* MENU */}
        <ul className={`menu ${mobileOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
          </li>

          {/* ABOUT */}
          <li className="dropdown">
            <span
              className="dropdown-title"
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              About ▾
            </span>

            {/* DESKTOP */}
            <ul className="dropdown-menu desktop-only">
              <li><Link to="/about/about-university">About University</Link></li>
              <li><Link to="/about/mission-vision">Mission & Vision</Link></li>
              <li><Link to="/about/history">History</Link></li>
              <li><Link to="/about/university-mous">University MoU's</Link></li>
            </ul>

            {/* MOBILE */}
            {aboutOpen && (
              <ul className="dropdown-menu mobile-only">
                <li><Link to="/about/about-university" onClick={() => setMobileOpen(false)}>About University</Link></li>
                <li><Link to="/about/mission-vision" onClick={() => setMobileOpen(false)}>Mission & Vision</Link></li>
                <li><Link to="/about/history" onClick={() => setMobileOpen(false)}>History</Link></li>
                <li><Link to="/about/university-mous" onClick={() => setMobileOpen(false)}>University MoU's</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/">Administration</Link></li>
          <li><Link to="/">Academics</Link></li>
          <li><Link to="/">Student</Link></li>
          <li><Link to="/">Research</Link></li>
          <li><Link to="/">Facilities</Link></li>
          <li><Link to="/">Gallery</Link></li>
          <li><Link to="/">Alumni</Link></li>
          <li><Link to="/">Colleges</Link></li>
          <li><Link to="/">Endowment</Link></li>
          <li><Link to="/">IQAC</Link></li>
          <li><Link to="/">News Letter</Link></li>
        </ul>
      </nav>
    </>
  );
}
