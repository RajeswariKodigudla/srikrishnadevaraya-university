import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const toggleSubmenu = (name) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="mobile-top">
        <button className="menu-btn" onClick={() => setMobileOpen(true)}>☰</button>
      </div>

      {/* MOBILE OVERLAY */}
      {mobileOpen && <div className="overlay" onClick={() => setMobileOpen(false)} />}

      {/* NAVBAR */}
      <nav className={`navbar ${mobileOpen ? "open" : ""}`}>

        {/* MOBILE HEADER */}
        <div className="mobile-header">
          <span>MENU</span>
          <button className="close-btn" onClick={() => setMobileOpen(false)}>✖</button>
        </div>

        <ul className="menu">

          <li><Link to="/">Home</Link></li>

          {/* ABOUT */}
          <li>
            <div className="menu-row" onClick={() => toggleSubmenu("about")}>
              <span>About</span>
              <span>▾</span>
            </div>
            {openMenu === "about" && (
              <ul className="submenu">
                <li><Link to="/about/about-university">About University</Link></li>
                <li><Link to="/about/mission-vision">Mission & Vision</Link></li>
                <li><Link to="/about/history">History</Link></li>
                <li><Link to="/about/university-mous">University MoU's</Link></li>
              </ul>
            )}
          </li>

          {/* ADMINISTRATION */}
          <li>
            <div className="menu-row" onClick={() => toggleSubmenu("admin")}>
              <span>Administration</span>
              <span>▾</span>
            </div>
            {openMenu === "admin" && (
              <ul className="submenu">
                <li>Chancellor</li>
                <li> Rector</li>
                <li>Vice Chancellor</li>
                <li>Registrar</li>
                <li>Executive Council</li>
                <li>Academic Senate</li>
                                <li>Deans</li>
                <li>Directors</li>
                                <li>Officials</li>





              </ul>
            )}
          </li>

          {/* ACADEMICS */}
          <li>
            <div className="menu-row" onClick={() => toggleSubmenu("academics")}>
              <span>Academics</span>
              <span>▾</span>
            </div>
            {openMenu === "academics" && (
              <ul className="submenu">
                <li>Admissions</li>
                <li>Courses Offered</li>
                <li>Syllabus</li>
                <li>Academic Calender</li>
                <li>Faculties</li>
                <li>Regulations</li>



              </ul>
            )}
          </li>

          {/* Reasearch */}
          <li>
            <div className="menu-row" onClick={() => toggleSubmenu("student")}>
              <span>Reasearch</span>
              <span>▾</span>
            </div>
            {openMenu === "student" && (
              <ul className="submenu">
                <li>R&D Facilities</li>
                <li>Reasearch Centres</li>
                <li>Projects & Collaborations</li>
                <li>ph.D Awarded</li>

              </ul>
            )}
          </li>

          {/* Colleges */}
          <li>
            <div className="menu-row" onClick={() => toggleSubmenu("student")}>
              <span>Colleges</span>
              <span>▾</span>
            </div>
            {openMenu === "student" && (
              <ul className="submenu">
                <li>Consultant Colleges</li>
                <li>Affiliated Colleges</li>
                
              </ul>
            )}
          </li>

          {/* Facilities */}
          <li>
            <div className="menu-row" onClick={() => toggleSubmenu("student")}>
              <span>Facilities</span>
              <span>▾</span>
            </div>
            {openMenu === "student" && (
              <ul className="submenu">
                <li>Placement Cell</li>
                <li>Central library</li>
                <li>Health Centre</li>
                <li>Hostel</li>
                <li>NSS</li>
                <li>Sports/Gymnasium</li>






                
              </ul>
            )}
          </li>


          
          {/* Download */}
          <li>
            <div className="menu-row" onClick={() => toggleSubmenu("student")}>
              <span>Download</span>
              <span>▾</span>
            </div>
            {openMenu === "student" && (
              <ul className="submenu">
                <li>XIX Convocation Admit Card</li>
               
                
              </ul>
            )}
          </li>

            



          


        </ul>
      </nav>
    </>
  );
}
