import { useState, useEffect } from "react";
import ShrimpImage from "../assets/shrimp.svg";
import SaladImage from "../assets/temp/Salad.jpg";
import PancakeImage from "../assets/temp/Pancakes.jpg";
import CakeImage from "../assets/temp/Cake.jpg";
import CocktailImage from "../assets/temp/Cocktail.jpg";

import useHttp from "../hooks/use-http";

import AppButton from "../components/AppButton";
import ItemCardSkeleton from "../components/skeletons/ItemCardSkeleton";
import ItemCard from "../components/ItemCard";
import SubHeader from "../components/SubHeader";
import Header from "../components/Header";
import ImageCard from "../components/ImageCard";

const LandingPage = () => {
  const [randomRecipes, setrandomRecipes] = useState([]);

  const {
    fireRequest: fetchRandomRecipes,
    isLoading: isFetchingRandomRecipes,
    error: fetchRandomRecipesError,
  } = useHttp();

  useEffect(() => {
    const getRandomRecipes = async () => {
      const fetchRandomRecipesConfig = {
        // endpoint: "/recipes/random?number=4",
        testUrl: "http://localhost:3001/recipes",
        isTest: true,
      };
      const response = await fetchRandomRecipes(fetchRandomRecipesConfig);
      if (response.status < 199 && response.status > 299) return;
      setrandomRecipes(response.data);
    };
    getRandomRecipes();
  }, [fetchRandomRecipes]);
  return (
    <>
      <div className="flex flex-col max-w-full overflow-clip gap-10">
        <div className="flex min-h-full min-w-full flex-col justify-center items-center p-5 gap-16 md:flex-row md:justify-around">
          <div className="flex flex-col gap-5 items-center md:items-start">
            <h1 className="font-bold text-5xl md:text-4xl leading-tight lg:text-7xl lg:leading-normal text-slate-700">
              Cook like a pro with our
              <span className="text-red-500"> Easy</span> and
              <span className="text-red-500"> Tasty</span> Recipes
            </h1>
            <p className="text-slate-500 text-center text-lg">
              From quick and easy meals to gourmet delights, we have something
              for every taste and occassion
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
        <div className="flex flex-col min-w-full gap-5 justify-center items-center overflow-clip scroll-smooth">
          <Header>Popular Recipes You Can't Miss</Header>
          <SubHeader>
            From Comfort food classics to exotic flavours, our featured recipes
            are sure to impress
          </SubHeader>
          <div className="flex justify-around gap-3 overflow-x-auto min-w-full max-w-full">
            {isFetchingRandomRecipes ? (
              <>
                <ItemCardSkeleton />
                <ItemCardSkeleton />
                <ItemCardSkeleton />
                <ItemCardSkeleton />
              </>
            ) : (
              <>
                {randomRecipes.map((recipe) => (
                  <ItemCard image={recipe.image} title={recipe.title} />
                ))}
              </>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Header>Explore by Cuisine Type</Header>
            <SubHeader>
              Discover new flavours and cooking techniques with our diverse
              selection of cuisine types
            </SubHeader>
            <div className="flex gap-3 max-w-full overflow-x-auto">
              <ImageCard image={SaladImage} title="Salads" />
              <ImageCard image={PancakeImage} title="Pancakes" />
              <ImageCard image={CakeImage} title="Cakes" />
              <ImageCard image={CocktailImage} title="Cocktails" />
            </div>
          </div>
        </div>
        <div className="min-w-full flex flex-col justify-center items-center gap-2 md:gap-9 bg-red-400 p-10 md:p-32 rounded-md">
          <h1 className="text-3xl lg:text-5xl font-bold text-white">
            About Us
          </h1>
          <p className="text-white text-justify text-md md:text-xl lg:text-2">
            Discover a world of culinary inspiration at your fingertips. From
            traditional classics to innovative delights, our app offers a
            curated collection of mouthwatering recipes. Join a vibrant culinary
            community, exchange tips, and ignite your cooking passion. <br />
            Elevate your meals with "Flavorful Bites" – your trusted companion
            in the kitchen.
          </p>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
