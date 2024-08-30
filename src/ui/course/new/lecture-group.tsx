import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import InputFieldNoBorder from "@/ui/common/input-field-no-border";
import { type ILecture } from "@/types/course";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface Props {
  lecture: ILecture;
  chapterId: number;
  removeLecture: (chapterId: number, lectureId: number) => void;
}

const LectureGroup = ({ lecture, chapterId, removeLecture }: Props) => {
  const t = useTranslations();

  return (
    <div className="flex gap-5 pl-5 items-start">
      <Typography className="text-lg text-nowrap">
        {t("Course.New.lecture")} {lecture.lectureId}:
      </Typography>
      <div className="w-full flex gap-5 items-end flex-wrap">
        <InputFieldNoBorder fontSize="20px" title={t("Course.New.lecture-name")} />
        <InputFieldNoBorder fontSize="20px" title={"URL Video"} />
        <div className="flex items-center">
          <Checkbox {...label} sx={{ color: "primary.main" }} />
          <Typography className="text-base text-nowrap">Preview</Typography>
          {lecture.lectureId != 1 && (
            <IconButton
              sx={{ color: "primary.main" }}
              aria-label="close"
              onClick={() => removeLecture(chapterId, lecture.lectureId)}
            >
              <CloseIcon />
            </IconButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default LectureGroup;
