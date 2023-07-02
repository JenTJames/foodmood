import React from "react";
import Navlink from "./Navlink";

const Navlinks = () => {
  return (
    <ul className="flex gap-7">
      <Navlink>Home</Navlink>
      <Navlink>Recipes</Navlink>
      <Navlink>Categories</Navlink>
      <Navlink>Featured</Navlink>
      <Navlink>Trending</Navlink>
    </ul>
  );
};

export default Navlinks;
