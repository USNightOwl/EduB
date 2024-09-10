import { Box } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import React from "react";

const CourseCardSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 items-center justify-center px-2 sm:px-4">
      {[1, 2, 3].map((num) => (
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
