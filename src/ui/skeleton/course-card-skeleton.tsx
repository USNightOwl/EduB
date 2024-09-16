import { Box } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  numberOfSlide?: number;
}

const CourseCardSkeleton = ({ numberOfSlide = 3 }: Props) => {
  function getClassName(numberOfSlide: number) {
    if (numberOfSlide === 3) return "md:grid-cols-2 xl:grid-cols-3";
    if (numberOfSlide === 2) return "md:grid-cols-2";
    return "";
  }

  return (
    <div className={cn("grid grid-cols-1 gap-4 items-center justify-center px-2 sm:px-4", getClassName(numberOfSlide))}>
      {[...Array(numberOfSlide)].map((num) => (
        <Box sx={{ width: "100%" }} key={num}>
          <Skeleton variant="rectangular" height={200} />
          <div>
            <Skeleton />
            <Skeleton />
          </div>
        </Box>
      ))}
    </div>
  );
};

export default CourseCardSkeleton;
