import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
const ImageCard = ({ image, title }) => {
  return (
    <div className="relative flex-shrink-0 md:flex-shrink">
      <img
        className="w-64 h-64 rounded-md bg-slate-300 object-center object-cover md:w-72 lg:w-96 md:h-72"
        src={image}
        alt=""
      />
      <div className="absolute cursor-pointer rounded-md top-0 left-0 w-full h-full text-white bg-black bg-opacity-50 backdrop-blur opacity-0 hover:opacity-100 flex items-end justify-start p-3 transition-opacity duration-500">
        <h2 className="text-white text-lg font-bold ">{title}</h2>
        <KeyboardDoubleArrowRightRoundedIcon color="inherit" fontSize="large" />
      </div>
    </div>
  );
};

export default ImageCard;
