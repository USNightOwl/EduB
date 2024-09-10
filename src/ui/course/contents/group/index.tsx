import React from "react";
import ContentCell from "./content-cell";
import { type ILectureResponse } from "@/types/course";

interface Props {
  listLecture: ILectureResponse[];
}

const GroupContent = ({ listLecture }: Props) => {
  return (
    <div>
      {listLecture.map((lecture, idx) => (
        <ContentCell key={lecture.id} lecture={lecture} idx={idx + 1} />
      ))}
    </div>
  );
};

export default GroupContent;
