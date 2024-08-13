import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { useTranslations } from "next-intl";

const SearchBar = () => {
  const t = useTranslations("Header");

  return (
    <div className="py-1 px-3 border rounded-full shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)] w-fit">
      <div className="flex w-fit">
        <input placeholder={t("search-placeholder")} className="bg-transparent w-48 focus:none outline-none" />
        <IconButton color="primary" aria-label="search" size="small">
          <SearchIcon className="text-blue-600" />
        </IconButton>
      </div>
    </div>
  );
};

export default SearchBar;
