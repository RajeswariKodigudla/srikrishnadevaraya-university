import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const toggleSubmenu = (menu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  const closeAll = () => {
    setMobileOpen(false);
    setOpenMenu(null);
  };

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="mobile-top">
        <button className="menu-btn" onClick={() => setMobileOpen(true)}>
          ☰
        </button>
      </div>

      {/* OVERLAY */}
      {mobileOpen && <div className="overlay" onClick={closeAll} />}

      {/* NAVBAR */}
      <nav className={`navbar ${mobileOpen ? "open" : ""}`}>
        {/* MOBILE HEADER */}
        <div className="mobile-header">
          <span>MENU</span>
          <button className="close-btn" onClick={closeAll}>
            ✖
          </button>
        </div>

        <ul className="menu">
          {/* HOME */}
          <li>
            <Link to="/" onClick={closeAll}>
              Home
            </Link>
          </li>

          {/* ABOUT */}
          <li>
            <div className="menu-row" onClick={() => toggleSubmenu("about")}>
              <span>About</span>
              <span>▾</span>
            </div>
            {openMenu === "about" && (
              <ul className="submenu">
                <li><Link to="/about/about-university" onClick={closeAll}>About University</Link></li>
                <li><Link to="/about/mission-vision" onClick={closeAll}>Mission & Vision</Link></li>
                <li><Link to="/about/history" onClick={closeAll}>History</Link></li>
                <li><Link to="/about/university-mous" onClick={closeAll}>University MoU's</Link></li>
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
                <li><Link to="/administration/chancellor" onClick={closeAll}>Chancellor</Link></li>
                <li><Link to="/administration/vice-chancellor" onClick={closeAll}>Vice Chancellor</Link></li>
                <li><Link to="/administration/registrar" onClick={closeAll}>Registrar</Link></li>
                <li><Link to="/administration/executive-council" onClick={closeAll}>Executive Council</Link></li>
                <li><Link to="/administration/academic-senate" onClick={closeAll}>Academic Senate</Link></li>
                <li><Link to="/administration/deans" onClick={closeAll}>Deans</Link></li>
                <li><Link to="/administration/directors" onClick={closeAll}>Directors</Link></li>
                <li><Link to="/administration/officials" onClick={closeAll}>Officials</Link></li>
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
                <li><Link to="/academics/admissions" onClick={closeAll}>Admissions</Link></li>
                <li><Link to="/academics/courses-offered" onClick={closeAll}>Courses Offered</Link></li>
                <li><Link to="/academics/syllabus" onClick={closeAll}>Syllabus</Link></li>
                <li><Link to="/academics/academic-calendar" onClick={closeAll}>Academic Calendar</Link></li>
                <li><Link to="/academics/faculties" onClick={closeAll}>Faculties</Link></li>
                <li><Link to="/academics/regulations" onClick={closeAll}>Regulations</Link></li>
              </ul>
            )}
          </li>

          {/* COLLEGES */}
          <li>
            <div className="menu-row" onClick={() => toggleSubmenu("colleges")}>
              <span>Colleges</span>
              <span>▾</span>
            </div>
            {openMenu === "colleges" && (
              <ul className="submenu">
                <li>Constituent Colleges</li>
                <li>Affiliated Colleges</li>
              </ul>
            )}
          </li>

          {/* FACILITIES */}
          <li>
            <div className="menu-row" onClick={() => toggleSubmenu("facilities")}>
              <span>Facilities</span>
              <span>▾</span>
            </div>
            {openMenu === "facilities" && (
              <ul className="submenu">
                <li><Link to="/facilities/placement-cell" onClick={closeAll}>Placement Cell</Link></li>
                <li><Link to="/facilities/central-library" onClick={closeAll}>Central Library</Link></li>
                <li><Link to="/facilities/health-center" onClick={closeAll}>Health Center</Link></li>
                <li><Link to="/facilities/hostel" onClick={closeAll}>Hostel</Link></li>
                <li><Link to="/facilities/nss" onClick={closeAll}>NSS</Link></li>
                <li><Link to="/facilities/sports-gymnasium" onClick={closeAll}>Sports / Gymnasium</Link></li>
              </ul>
            )}
          </li>

          {/* DOWNLOAD */}
          <li>
            <div className="menu-row" onClick={() => toggleSubmenu("download")}>
              <span>Download</span>
              <span>▾</span>
            </div>
            {openMenu === "download" && (
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
