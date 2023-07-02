import React from "react";
import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <div className="px-5 py-2 bg-slate-100 min-w-full md:flex md:justify-between md:items-center hidden">
      <h1 className="font-bold text-xl text-red-100 font-serif bg-red-400 rounded-lg p-3">
        Foodmood
      </h1>
      <Navlinks />
    </div>
  );
};

export default Navbar;
