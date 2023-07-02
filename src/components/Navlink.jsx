import React from "react";

const Navlink = ({ children }) => {
  return (
    <li className="text-slate-400 cursor-pointer hover:text-red-400">
      {children}
    </li>
  );
};

export default Navlink;
