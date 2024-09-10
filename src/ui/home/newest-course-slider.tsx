import React from "react";
import { getTranslations } from "next-intl/server";
import CustomSlide from "../common/custom-slide";

export default async function NewestCourseSlider() {
  const t = await getTranslations("Global.Title.Card");
  const data = await fetch(process.env.NEXT_PUBLIC_SERVER_API + "/course");
  const courses = await data.json();

  return <CustomSlide title={t("newest-course")} courses={courses.data} />;
}
