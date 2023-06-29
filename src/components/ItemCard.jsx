import React from "react";
import AppButton from "./AppButton";

const ItemCard = () => {
  return (
    <div className="flex flex-col gap-2 p-2 rounded-lg border">
      <div className="h-44 w-44 rounded-md bg-slate-300 md:min-w-full lg:h-72"></div>
      <h4 className="font-semibold">Creamy Tomato Basil Soup</h4>
      <p>Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</p>
      <AppButton bold variant="outlined">
        View More
      </AppButton>
    </div>
  );
};

export default ItemCard;
