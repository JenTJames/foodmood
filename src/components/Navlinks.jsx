import React from "react";
import Navlink from "./Navlink";

const Navlinks = () => {
  return (
    <ul className="flex gap-7">
      <Navlink to="/home">Home</Navlink>
      <Navlink to="/recipes">Recipes</Navlink>
      <Navlink to="/categories">Categories</Navlink>
      <Navlink to="/featured">Featured</Navlink>
      <Navlink to="/trending">Trending</Navlink>
    </ul>
  );
};

export default Navlinks;
