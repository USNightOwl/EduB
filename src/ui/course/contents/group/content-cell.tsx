import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DialogPreview from "./dialog-preview";
import { type ILectureResponse } from "@/types/course";

interface Props {
  lecture: ILectureResponse;
  idx: number;
}

const ContentCell = ({ lecture, idx }: Props) => {
  return (
    <div className="w-full border-b p-2 py-4 flex max-lg:flex-col justify-between">
      <div>
        {idx}. {lecture.name}
      </div>
      <div className="flex flex-col gap-1 max-lg:flex-row-reverse max-lg:gap-5 max-lg:justify-between">
        {lecture.preview && <DialogPreview url={lecture.url} />}
        <div className="opacity-90 flex gap-1 items-center font-medium">
          <AccessTimeIcon />
          <span>1 hours, 14 minutes</span>
        </div>
      </div>
    </div>
  );
};

export default ContentCell;
