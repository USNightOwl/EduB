import React from "react";
import { notFound } from "next/navigation";
import CourseCard from "../course/course-card";
import { getListCourseByTheme } from "@/models/course";

interface Props {
  cateId: string | string[] | null;
  topicId: string | string[] | null;
}

const RightSide = async ({ cateId, topicId }: Props) => {
  const courses = await getListCourseByTheme(cateId?.toString() || "", topicId?.toString() || "");

  if (!courses) {
    notFound();
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title}
          isSingleSlide={false}
          thumbnail={course.attachment?.path || ""}
          id={course.id}
          rating={4}
          price={course.price}
          discount={course.discountPercent}
          author={course.author?.name || "No Author"}
          topic={course.topic?.name || "No Topic"}
        />
      ))}
    </div>
  );
};

export default RightSide;
