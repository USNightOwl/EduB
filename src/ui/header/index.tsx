import React from "react";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { Box } from "@mui/material";
import Logo from "../logo";
import ChangeLanguage from "../button/change-language";
import SearchBar from "./search-bar";
import LoginGroup from "./login-group";
import CategoryGroup from "./category";
import TreeCategory from "./category/tree";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{ bgcolor: "background.default" }}
      className="w-full lg:gap-3 p-3 fixed top-0 left-0 flex lg:items-center justify-between max-lg:flex-col z-[999] shadow"
    >
      <div className="flex justify-between items-center">
        <Logo />
        <div className="lg:hidden flex justify-center items-center gap-1">
          <ChangeLanguage />
          <Button variant="text" sx={{ color: "primary.main" }} onClick={handleClick}>
            <MenuIcon />
          </Button>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-between max-lg:flex-col-reverse max-lg:hidden gap-2">
        <CategoryGroup />
        <div className="flex-1 flex items-center justify-center">
          <SearchBar />
        </div>
        <LoginGroup />
      </div>
      <div className="lg:hidden">
        <Drawer
          anchor="right"
          open={open}
          onClose={handleClick}
          PaperProps={{
            sx: {
              backgroundColor: "background.default",
              color: "primary.main",
            },
          }}
        >
          <div className="flex items-center justify-center mt-4 mb-2">
            <LoginGroup handleClose={handleClick} />
          </div>
          <div className="p-2 max-lg:w-full flex items-center justify-center">
            <SearchBar />
          </div>
          <TreeCategory />
        </Drawer>
      </div>
    </Box>
  );
};

export default Header;
