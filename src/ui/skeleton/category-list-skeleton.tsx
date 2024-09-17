import Skeleton from "@mui/material/Skeleton";
import React from "react";

const CategoryListSkeleton = () => {
  return (
    <div>
      {[1, 2, 3].map((num) => (
        <Skeleton variant="text" sx={{ fontSize: "2.5rem" }} key={num} />
      ))}
    </div>
  );
};

export default CategoryListSkeleton;
