import React from "react";
import { type Lecture } from "@prisma/client";
import ContentCell from "./content-cell";

interface Props {
  listLecture: Lecture[];
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
