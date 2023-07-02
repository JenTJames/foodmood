import { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const searchQueryChangeHandler = (event) => {
    setSearchQuery(event.target.value);
  };

  const searchHandler = (event) => {
    event.preventDefault();
    //TODO:  Fire API Call to search the entered query progressively
    console.log(searchQuery);
  };

  return (
    <form className="flex gap-2" onSubmit={searchHandler}>
      <input
        className="border bg-transparent rounded-lg outline-none font-semibold focus:border-red-400 px-3"
        onChange={searchQueryChangeHandler}
        type="text"
        name="search"
        id="search"
        placeholder="Enter recipe name, category, ..."
      />
      <Tooltip title="Search">
        <IconButton type="submit">
          <SearchRoundedIcon />
        </IconButton>
      </Tooltip>
    </form>
  );
};

export default SearchBar;
