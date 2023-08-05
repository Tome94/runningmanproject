import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav>
      <div className="nav-links">
        <div className="grid">
          <NavLink to="/local">
            <h2>Local</h2>
          </NavLink>
          <NavLink>
            <h2>Internet</h2>
          </NavLink>
          <NavLink to="/instructions"><h2>How to play</h2></NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
