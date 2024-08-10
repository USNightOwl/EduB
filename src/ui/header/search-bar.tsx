import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

const SearchBar = () => {
  return (
    <div className="py-1 pl-6 pr-4 border rounded-full shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)] w-fit">
      <div className="flex w-fit gap-2">
        <input placeholder="What're you searching for?" className="bg-transparent w-48 focus:none outline-none" />
        <IconButton color="primary" aria-label="search">
          <SearchIcon className="text-blue-600" />
        </IconButton>
      </div>
    </div>
  );
};

export default SearchBar;
