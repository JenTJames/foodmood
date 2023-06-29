import React from "react";

const Header = ({ children }) => {
  return (
    <h1 className="text-2xl text-center font-semibold text-slate-700 md:text-4xl">
      {children}
    </h1>
  );
};

export default Header;
