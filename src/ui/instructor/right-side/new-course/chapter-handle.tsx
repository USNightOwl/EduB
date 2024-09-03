"use client";
import React from "react";
import { useTranslations } from "next-intl";
import AddIcon from "@mui/icons-material/Add";
import { Button, Typography } from "@mui/material";
import { type IChapter } from "@/types/course";
import ChapterBox from "@/ui/course/new/chapter-box";

interface Props {
  curriculum: IChapter[];
  setCurriculum: React.Dispatch<React.SetStateAction<IChapter[]>>;
}

export interface IEditLecture {
  chapterId: number;
  lectureId: number;
  lectureName: string;
  urlVideo: string;
  preview: boolean;
}

const ChapterHandle = ({ curriculum, setCurriculum }: Props) => {
  const t = useTranslations();
  const [cntChapter, setCntChapter] = React.useState<number>(1);

  const createNewChapter = () => {
    const countChapter = cntChapter + 1;
    setCntChapter(countChapter);
    setCurriculum([
      ...curriculum,
      {
        chapterId: countChapter,
        chapterName: "",
        lecture: [
          {
            lectureId: 1,
            lectureName: "",
            urlVideo: "",
            preview: false,
          },
        ],
      },
    ]);
  };

  const createNewLecture = (chapterId: number) => {
    const chapter: IChapter = curriculum.filter((chapter) => chapter.chapterId === chapterId)[0];
    const restChapter = curriculum.filter((chapter) => chapter.chapterId !== chapterId);
    chapter.lecture.push({
      lectureId: chapter.lecture.length + 1,
      lectureName: "",
      urlVideo: "",
      preview: false,
    });
    const array = [...restChapter, chapter].sort((a, b) => a.chapterId - b.chapterId);
    setCurriculum([...array]);
  };

  const removeChapter = (chapterId: number) => {
    const countChapter = cntChapter - 1;
    setCntChapter(countChapter);
    const restChapter = curriculum.filter((chapter) => chapter.chapterId !== chapterId);
    for (let i = 0; i < countChapter; i++) {
      restChapter[i].chapterId = i + 1;
    }
    setCurriculum([...restChapter]);
  };

  const removeLecture = (chapterId: number, lectureId: number) => {
    const chapter: IChapter = curriculum.filter((chapter) => chapter.chapterId === chapterId)[0];
    const restChapter = curriculum.filter((chapter) => chapter.chapterId !== chapterId);
    // remove lecture
    const restLecture = chapter.lecture.filter((lecture) => lecture.lectureId !== lectureId);
    for (let i = 0; i < restLecture.length; i++) {
      restLecture[i].lectureId = i + 1;
    }
    const updateChapter: IChapter = {
      chapterId: chapter.chapterId,
      chapterName: chapter.chapterName,
      lecture: restLecture,
    };
    const array = [...restChapter, updateChapter].sort((a, b) => a.chapterId - b.chapterId);
    setCurriculum([...array]);
  };

  const changeChapterName = (chapterId: number, chapterName: string) => {
    const chapter: IChapter = curriculum.filter((chapter) => chapter.chapterId === chapterId)[0];
    const restChapter = curriculum.filter((chapter) => chapter.chapterId !== chapterId);
    chapter.chapterName = chapterName;
    const array = [...restChapter, chapter].sort((a, b) => a.chapterId - b.chapterId);
    setCurriculum([...array]);
  };

  const changeLectureVariable = ({ chapterId, lectureId, lectureName, urlVideo, preview }: IEditLecture) => {
    const chapter: IChapter = curriculum.filter((chapter) => chapter.chapterId === chapterId)[0];
    const restChapter = curriculum.filter((chapter) => chapter.chapterId !== chapterId);

    chapter.lecture[lectureId - 1].lectureName = lectureName;
    chapter.lecture[lectureId - 1].urlVideo = urlVideo;
    chapter.lecture[lectureId - 1].preview = preview;
    const array = [...restChapter, chapter].sort((a, b) => a.chapterId - b.chapterId);
    setCurriculum([...array]);
  };

  return (
    <div className="flex flex-col gap-5">
      <Typography variant="h4" className="border-b-2 italic w-full mb-4">
        {t("Course.curriculum")}
      </Typography>
      {curriculum.map((chapter) => (
        <ChapterBox
          key={chapter.chapterId}
          createNewLecture={createNewLecture}
          removeChapter={removeChapter}
          removeLecture={removeLecture}
          changeChapterName={changeChapterName}
          chapter={chapter}
          changeLectureVariable={changeLectureVariable}
        />
      ))}
      <div className="w-fit ml-2">
        <Button variant="outlined" startIcon={<AddIcon />} onClick={createNewChapter}>
          {t("Course.New.add-more-chapter")}
        </Button>
      </div>
    </div>
  );
};

export default ChapterHandle;
