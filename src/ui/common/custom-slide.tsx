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

interface ISlide {
  title: string;
  description?: string;
  isSingleSlide?: boolean;
  perView?: number;
}

const CustomSlide = ({ title, description, isSingleSlide = false, perView = 3 }: ISlide) => {
  const matches_1 = useMediaQuery("(max-width:1024px)");
  const matches_2 = useMediaQuery("(max-width:640px)");

  function calcPerView(perView: number) {
    return Math.max(1, perView);
  }

  return (
    <Container>
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
                ? calcPerView(perView - 2)
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
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <SwiperSlide key={num} className="pb-7">
            <CourseCard
              thumbnail="https://www.courses.tutorialswebsite.com/assets/front/img/category/reactjs-banner.jpeg"
              title="The Complete 2020 Fullstack Web Developer Course React"
              topic="web development"
              author="nxhawk"
              rating={3.5}
              price={560000}
              discount={50}
              isSingleSlide={isSingleSlide}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default CustomSlide;
