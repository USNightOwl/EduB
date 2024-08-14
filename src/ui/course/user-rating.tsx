import React from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const UserRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-2 items-center">
      <Typography className="text-white bg-red-500 p-1 rounded-full font-black text-[0.5rem] shadow">
        {rating}
      </Typography>
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
