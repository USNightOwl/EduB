import React from "react";
import CourseDescription from "../course-description";
import ListContent from "../contents";
import InstructorInfo from "./instructor-info";
import UserHandle from "./user-handle";

const CourseActions = () => {
  return (
    <div className="flex max-md:flex-col-reverse gap-3 md:gap-4">
      <div className="flex-1">
        <CourseDescription />
        <InstructorInfo />
        <ListContent />
      </div>
      <div className="lg:w-2/6 w-5/12 max-md:w-full">
        <UserHandle />
      </div>
    </div>
  );
};

export default CourseActions;
