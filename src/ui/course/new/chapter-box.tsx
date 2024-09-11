"use client";
import { Button, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import LectureGroup from "./lecture-group";
import InputFieldNoBorder from "@/ui/common/input-field-no-border";
import { type IChapter } from "@/types/course";
import { type IEditLecture } from "@/ui/instructor/right-side/new-course/chapter-handle";

interface Props {
  createNewLecture: (chapterId: number) => void;
  removeChapter: (chapterId: number) => void;
  removeLecture: (chapterId: number, lectureId: number) => void;
  changeChapterName: (chapterId: number, chapterName: string) => void;
  changeLectureVariable: ({ chapterId, lectureId, lectureName, urlVideo, preview }: IEditLecture) => void;
  chapter: IChapter;
}

const ChapterBox = ({
  createNewLecture,
  removeChapter,
  removeLecture,
  changeChapterName,
  changeLectureVariable,
  chapter,
}: Props) => {
  const t = useTranslations();

  const handleChangeValue = (data: string) => {
    changeChapterName(chapter.chapterId, data);
  };

  return (
    <div className="border-2 rounded p-3 flex flex-col gap-4">
      <div className="flex gap-5 items-end">
        <Typography className="font-semibold text-lg text-nowrap">
          {t("Course.New.chapter")} {chapter.chapterId}:
        </Typography>
        <div className="w-full">
          <InputFieldNoBorder
            title={t("Course.New.chapter-name")}
            value={chapter.chapterName}
            setValue={handleChangeValue}
          />
        </div>
        {chapter.chapterId != 1 && (
          <IconButton
            sx={{ color: "primary.main" }}
            aria-label="close"
            onClick={() => removeChapter(chapter.chapterId)}
          >
            <CloseIcon />
          </IconButton>
        )}
      </div>
      <div className="flex flex-col gap-2">
        {chapter.lecture.map((lecture) => (
          <LectureGroup
            lecture={lecture}
            key={lecture.lectureId}
            removeLecture={removeLecture}
            chapterId={chapter.chapterId}
            changeLectureVariable={changeLectureVariable}
          />
        ))}
      </div>
      <div className="w-fit mt-3">
        <Button variant="outlined" startIcon={<AddIcon />} onClick={() => createNewLecture(chapter.chapterId)}>
          {t("Course.New.add-more-lecture")}
        </Button>
      </div>
    </div>
  );
};

export default ChapterBox;
