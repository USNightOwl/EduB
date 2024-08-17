import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";
import CourseCard from "./course-card";

const RelevantCourse = () => {
  const t = useTranslations("Course");
  return (
    <div className="pt-4 pb-8">
      <Typography variant="h4" className="mb-2">
        {t("relevant-course")}
      </Typography>
      <div className="grid grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((num) => (
          <div key={num}>
            <CourseCard
              isSingleSlide={false}
              thumbnail="https://www.courses.tutorialswebsite.com/assets/front/img/category/reactjs-banner.jpeg"
              title="The Complete 2020 Fullstack Web Developer Course React"
              topic="web development"
              author="nxhawk"
              rating={3.5}
              price={560000}
              discount={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelevantCourse;
