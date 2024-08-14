import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { useTranslations } from "next-intl";
import Input from "@mui/material/Input";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const SearchBar = () => {
  const t = useTranslations("Header");

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
    },
  }));
  return (
    <Search className="shadow">
      <SearchIconWrapper>
        <SearchIcon sx={{ color: "primary.main" }} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={t("search-placeholder")}
        inputProps={{ "aria-label": "search" }}
        sx={{ color: "placeholder.main" }}
      />
    </Search>
  );
};

export default SearchBar;
