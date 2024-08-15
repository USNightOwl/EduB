"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CourseContent from "./course-content";
import { type ICourseContent, type ICourse } from "@/types/course";
import { cn } from "@/lib/utils";
import { useRouter } from "@/navigation";

interface ICoureCard extends ICourse {
  isSingleSlide: boolean;
}

const CourseCard = (props: ICoureCard) => {
  const router = useRouter();

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
        className={cn(
          "!w-full !min-h-[240px] cursor-pointer",
          props.isSingleSlide && "lg:max-w-[400px] md:max-w-[250px]",
        )}
        onClick={() => router.push({ pathname: "/course/[id]", params: { id: "1" } })}
      />
      <CardContent className="py-[1.7rem]">
        <CourseContent {...(props as ICourseContent)} />
      </CardContent>
      <div className="absolute top-0.5 right-0.5 z-[10] bg-red-600 text-white rounded p-1 px-2 text-xs capitalize italic outline-none border-0 font-semibold">
        {props.topic}
      </div>
    </Card>
  );
};

export default CourseCard;
