import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import PriceBox from "../common/price-box";
import UserRating from "./user-rating";
import { type ICourse } from "@/types/course";
import { cn } from "@/lib/utils";

interface ICoureCard extends ICourse {
  isSingleSlide: boolean;
}

const CourseCard = (props: ICoureCard) => {
  function sizeImage() {
    if (!props.isSingleSlide) return { height: 240 };
    return { width: 400 };
  }

  return (
    <Card
      className={cn("shadow relative", props.isSingleSlide && "flex max-md:flex-col")}
      sx={{ bgcolor: "box.bg", color: "box.text" }}
    >
      <CardMedia
        sx={sizeImage()}
        image={props.thumbnail}
        title={props.title}
        className={cn("!w-full !min-h-[240px]", props.isSingleSlide && "lg:max-w-[400px] md:max-w-[250px]")}
      />
      <CardContent className="py-[1.7rem]">
        <Typography component="div" className="font-semibold text-lg">
          {props.title}
        </Typography>
        <Typography component="div" className="text-base my-2">
          {props.author}
        </Typography>
        <UserRating rating={props.rating} />
        <PriceBox price={props.price} discount={props.discount} />
      </CardContent>
      <div className="absolute top-0.5 right-0.5 z-[10] bg-red-600 text-white rounded p-1 px-2 text-xs capitalize italic outline-none border-0 font-semibold">
        {props.topic}
      </div>
    </Card>
  );
};

export default CourseCard;
