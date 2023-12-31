import FastfoodRoundedIcon from "@mui/icons-material/FastfoodRounded";
import AppButton from "./AppButton";
import { Tooltip } from "@mui/material";

const ItemCard = ({ image = null, title, desc = null, healthScore }) => {
  return (
    <div className="flex flex-col gap-5 p-2 rounded-lg border w-64 flex-shrink-0 lg:w-96 lg:flex-shrink justify-between">
      {!image && (
        <div className="h-44 w-44 flex text-8xl text-slate-200 justify-center items-center rounded-md bg-slate-300 md:min-w-full lg:h-72">
          <FastfoodRoundedIcon fontSize="inherit" color="inherit" />
        </div>
      )}
      {image && (
        <img
          className="h-44 w-44 rounded-md min-w-full lg:h-72 object-cover"
          src={image}
          alt=""
        />
      )}
      <div className="min-w-full flex justify-between items-center gap-2">
        <h4 className="font-semibold text-lg text-slate-800">{title}</h4>
        <Tooltip title="Health Score">
          <div className="w-10 h-10 flex justify-center items-center rounded-full bg-emerald-500 cursor-pointer">
            <p className="text-slate-50">{healthScore}</p>
          </div>
        </Tooltip>
      </div>
      {desc && <p className="text-slate-600 text-justify">{desc}</p>}
      <AppButton bold variant="outlined">
        View More
      </AppButton>
    </div>
  );
};

export default ItemCard;
