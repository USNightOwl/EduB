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
  isSingleSlide?: boolean;
}

const CustomSlide = ({ title, isSingleSlide = false }: ISlide) => {
  const matches_1 = useMediaQuery("(max-width:1024px)");
  const matches_2 = useMediaQuery("(max-width:640px)");

  return (
    <Container className="mb-10">
      <Typography variant="h5" className={cn("uppercase mb-1", fontSans.className)}>
        {title}
      </Typography>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={isSingleSlide ? 1 : matches_1 ? (matches_2 ? 1 : 2) : 3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <SwiperSlide key={num} className="pb-7">
            <CourseCard
              thumbnail="https://www.courses.tutorialswebsite.com/assets/front/img/category/reactjs-banner.jpeg"
              title="The Complete 2020 Fullstack Web Developer Course"
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
