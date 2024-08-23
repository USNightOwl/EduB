import React from "react";
import { cn } from "@/lib/utils";

interface RSBProps {
  children: React.ReactNode;
  openSideLeft: boolean;
}

const RightSideBar = ({ openSideLeft, children }: RSBProps) => {
  return <div className={cn("px-1 w-full", !openSideLeft && "w-[134%] max-lg:w-[153%] max-md:w-full")}>{children}</div>;
};

export default RightSideBar;
