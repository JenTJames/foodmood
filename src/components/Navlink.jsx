import React from "react";
import { NavLink } from "react-router-dom";

const Navlink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={(navData) =>
        navData.isActive
          ? "text-red-500 cursor-pointer"
          : "text-slate-400 cursor-pointer hover:text-red-400"
      }
    >
      {children}
    </NavLink>
  );
};

export default Navlink;
