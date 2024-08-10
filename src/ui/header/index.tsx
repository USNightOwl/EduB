import React from "react";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../logo";
import SearchBar from "./search-bar";
import LoginGroup from "./login-group";
import CategoryGroup from "./category";
import { cn } from "@/lib/utils";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full lg:gap-5 p-3 fixed top-0 left-0 flex lg:items-center justify-between bg-gray-50 max-lg:flex-col z-[999]">
      <div className="flex justify-between items-center">
        <Logo />
        <Button variant="text" color="error" className="gap-1 lg:hidden" onClick={handleClick}>
          <MenuIcon />
        </Button>
      </div>
      <div
        className={cn(
          "flex-1 flex items-center justify-between lg:gap-10 max-lg:flex-col-reverse gap-2",
          open ? "max-lg:flex" : "max-lg:hidden",
        )}
      >
        <CategoryGroup />
        <div className="w-4/12 max-lg:w-full flex items-center justify-center">
          <SearchBar />
        </div>
        <LoginGroup />
      </div>
    </div>
  );
};

export default Header;
