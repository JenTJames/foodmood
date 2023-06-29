import React from "react";
import ShrimpImage from "../assets/shrimp.svg";
import AppButton from "../components/AppButton";
import ItemCard from "../components/ItemCard";

const LandingPage = () => {
  return (
    <div className="flex flex-col max-w-full overflow-clip gap-10">
      <div className="flex min-h-full min-w-full flex-col justify-center items-center p-5 gap-16 md:flex-row md:justify-around">
        <div className="flex flex-col gap-5 items-center md:items-start">
          <h1 className="font-bold text-5xl md:text-4xl leading-tight lg:text-7xl lg:leading-normal text-slate-700">
            Cook like a pro with our
            <span className="text-red-500"> Easy</span> and
            <span className="text-red-500"> Tasty</span> Recipes
          </h1>
          <p className="text-slate-500 text-center text-lg">
            From quick and easy meals to gourmet delights, we have something for
            every taste and occassion
          </p>
          <div className="flex">
            <AppButton size="large" variant="contained" bold="true">
              Explore All Recipes
            </AppButton>
          </div>
        </div>
        <img
          className="sm:w-full md:w-[25rem] lg:w-[35rem] rounded-lg"
          src={ShrimpImage}
          alt="heroImage"
        />
      </div>
      <div className="flex flex-col min-w-full gap-3 justify-center items-center overflow-clip scroll-smooth">
        <h1 className="text-2xl text-center font-semibold text-slate-700">
          Popular Recipes You Can't Miss
        </h1>
        <p className="text-regular text-center text-slate-500">
          From Comfort food classics to exotic flavours, our featured recipes
          are sure to impress
        </p>
        <div className="flex gap-3 overflow-x-auto max-w-full">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
