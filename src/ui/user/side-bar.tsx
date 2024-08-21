"use client";
import React from "react";
import { Box, Container, IconButton } from "@mui/material";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import LeftSideBar from "./left-side-bar";
import RightSideBar from "./right-side-bar";
import { cn } from "@/lib/utils";

const SideBar = () => {
  const [openSideLeft, setOpenSideLeft] = React.useState<boolean>(true);

  return (
    <div
      className={cn(
        "transition-transform w-full flex gap-1 max-md:flex-col",
        !openSideLeft && "max-md:-translate-x-0 -translate-x-[25%] max-lg:-translate-x-[34%]",
      )}
    >
      <Box className="w-[25%] max-lg:w-[34%] py-1 md:py-2 max-md:w-full" sx={{ bgcolor: "box.bg", color: "box.text" }}>
        <LeftSideBar />
      </Box>

      {/* right side */}
      <div className="flex-1">
        <Container maxWidth={false} className="p-1" sx={{ bgcolor: "background.main", color: "primary.main" }}>
          <IconButton
            sx={{ color: "primary.main" }}
            onClick={() => setOpenSideLeft(!openSideLeft)}
            className="max-md:hidden"
          >
            {openSideLeft ? (
              <FormatIndentDecreaseIcon fontSize="inherit" />
            ) : (
              <FormatIndentIncreaseIcon fontSize="inherit" />
            )}
          </IconButton>
          <RightSideBar openSideLeft={openSideLeft} />
        </Container>
      </div>
    </div>
  );
};

export default SideBar;