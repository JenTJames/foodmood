import React from "react";
import Navbar from "./Navbar";

const Page = ({ component }) => {
  return (
    <div className="min-h-screen min-w-full bg-slate-100 p-12">
      <Navbar />
      {component}
    </div>
  );
};

export default Page;
