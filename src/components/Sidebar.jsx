import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar-title">About</div>

    <NavLink to="about" className="sidebar-link">About</NavLink>
    <NavLink to="faculty" className="sidebar-link">Faculty</NavLink>
    <NavLink to="contact" className="sidebar-link">Contact</NavLink>
    <NavLink to="facilities" className="sidebar-link">Facilities</NavLink>
    <NavLink to="grievance" className="sidebar-link">Grievance & IQAC Cell</NavLink>
    <NavLink to="seminar" className="sidebar-link">
      SEMINAR / CONFERENCE / WORKSHOP / SYMPOSIUM
    </NavLink>
    <NavLink to="syllabus" className="sidebar-link">Syllabus</NavLink>
    <NavLink to="research" className="sidebar-link">Research Work</NavLink>
    <NavLink to="academic" className="sidebar-link">Academic Activities</NavLink>
    <NavLink to="vision" className="sidebar-link">Vision & Mission</NavLink>
    <NavLink to="achievements" className="sidebar-link">
      Achievements & Awards
    </NavLink>
    <NavLink to="notice" className="sidebar-link">Notice & Report</NavLink>
  </div>
);

export default Sidebar;
