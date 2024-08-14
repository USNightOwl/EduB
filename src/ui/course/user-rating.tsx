import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const UserRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-2 items-center">
      <Typography className="text-red-500 font-black text-xs">{rating}</Typography>
      <Rating
        name="half-rating-read"
        defaultValue={rating}
        precision={0.5}
        readOnly
        sx={{ borderColor: "primary.main" }}
      />
    </div>
  );
};

export default UserRating;
