import React from "react";
import { getTranslations } from "next-intl/server";
import CustomSlide from "../common/custom-slide";
import { getNewestCourses } from "@/models/course";

export default async function NewestCourseSlider() {
  const t = await getTranslations("Global.Title.Card");
  const courses = await getNewestCourses();

  return <CustomSlide title={t("newest-course")} courses={courses} />;
}
