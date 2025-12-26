import { useState } from "react";
import { NavLink } from "react-router-dom";
import centreSidebarData from "../data/centreSidebarData";

export default function CentreSidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div className="centre-sidebar">
      <div className="sidebar-title" onClick={() => setOpen(!open)}>
        About ☰
      </div>

      {open &&
        centreSidebarData.map((item) => (
          <NavLink
            key={item.id}
            to={`/centre/${item.id}`}
            className="sidebar-item"
          >
            {item.label}
          </NavLink>
        ))}
    </div>
  );
}

