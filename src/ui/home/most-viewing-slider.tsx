import React from "react";
import { getTranslations } from "next-intl/server";
import CustomSlide from "../common/custom-slide";
import { getMostViewingCourses } from "@/models/course";

const MostViewingSlider = async () => {
  const t = await getTranslations("Global.Title.Card");
  const courses = await getMostViewingCourses();

  return <CustomSlide title={t("most-viewing")} isSingleSlide={true} courses={courses} />;
};

export default MostViewingSlider;
