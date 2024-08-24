"use client";
import React from "react";
import { Box, Container, IconButton } from "@mui/material";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import { cn } from "@/lib/utils";

interface Props {
  LeftSide: React.ReactNode;
  RightSide: React.ReactNode;
}

const SideBar = ({ LeftSide, RightSide }: Props) => {
  const [openSideLeft, setOpenSideLeft] = React.useState<boolean>(true);

  return (
    <div
      className={cn(
        "transition-transform w-full flex gap-1 max-md:flex-col",
        !openSideLeft && "max-md:-translate-x-0 -translate-x-[25%] max-lg:-translate-x-[34%]",
      )}
    >
      <Box className="w-[25%] max-lg:w-[34%] max-md:w-full" sx={{ bgcolor: "box.bg", color: "box.text" }}>
        {LeftSide}
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

          {/* change content by page here */}
          <div className={cn("px-1 w-full", !openSideLeft && "w-[134%] max-lg:w-[153%] max-md:w-full")}>
            {RightSide}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SideBar;
