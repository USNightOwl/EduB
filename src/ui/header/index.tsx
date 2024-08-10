import React from "react";
import Logo from "../logo";
import SearchBar from "./search-bar";
import LoginGroup from "./login-group";

const Header = () => {
  return (
    <div className="w-full gap-5 p-3 fixed top-0 left-0 flex items-center justify-between bg-gray-50">
      <Logo />
      <div className="flex-1 flex items-center justify-between gap-10">
        <div>Category</div>
        <div className="w-4/12">
          <SearchBar />
        </div>
        <LoginGroup />
      </div>
    </div>
  );
};

export default Header;
