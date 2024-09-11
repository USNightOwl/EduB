"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Autoplay, Pagination } from "swiper/modules";

import useMediaQuery from "@mui/material/useMediaQuery";
import { Roboto_Mono } from "next/font/google";
import CourseCard from "../course/course-card";

import { cn } from "@/lib/utils";

const fontSans = Roboto_Mono({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-sans",
});

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { type FullCourse } from "@/models/course";

interface ISlide {
  title: string;
  description?: string;
  isSingleSlide?: boolean;
  perView?: number;
  courses: FullCourse[];
}

const CustomSlide = ({ title, description, courses, isSingleSlide = false, perView = 4 }: ISlide) => {
  const matches_1 = useMediaQuery("(max-width:1380px)");
  const matches_2 = useMediaQuery("(max-width:1024px)");
  const matches_3 = useMediaQuery("(max-width:640px)");

  function calcPerView(perView: number) {
    return Math.max(1, perView);
  }

  return (
    <Container maxWidth={false} className="mb-5 sm:mb-10">
      <div className="mb-1">
        <Typography variant="h5" className={cn("uppercase mb-0 text-nowrap", fontSans.className)}>
          {title}
        </Typography>
        {description && <Typography className="max-md:hidden text-base italic">{description}</Typography>}
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={
          isSingleSlide
            ? 1
            : matches_1
              ? matches_2
                ? matches_3
                  ? calcPerView(perView - 3)
                  : calcPerView(perView - 2)
                : calcPerView(perView - 1)
              : calcPerView(perView)
        }
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {courses.map((course) => (
          <SwiperSlide key={course.id} className="pb-7">
            <CourseCard
              thumbnail={course.attachment?.path || ""}
              title={course.title}
              topic={course.topic?.name || ""}
              author={course.author?.name || ""}
              rating={3.5}
              price={course.price}
              discount={course.discountPercent}
              isSingleSlide={isSingleSlide}
              id={course.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default CustomSlide;
