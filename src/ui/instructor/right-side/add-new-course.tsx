"use client";
import { Button, Typography } from "@mui/material";
import React from "react";
import { useTranslations } from "next-intl";
import AddIcon from "@mui/icons-material/Add";
import InputFieldNoBorder from "@/ui/common/input-field-no-border";
import TinyEditor from "@/ui/common/tiny-editor";
import CustomSelect from "@/ui/common/custom-select";
import ChapterBox from "@/ui/course/new/chapter-box";
import { type IChapter } from "@/types/course";
import UploadImage from "@/ui/common/upload-image";

const AddNewCourse = () => {
  const [editor, setEditor] = React.useState<string>("");
  const t = useTranslations();
  const [cntChapter, setCntChapter] = React.useState<number>(1);
  const [curriculum, setCurriculum] = React.useState<IChapter[]>([
    {
      chapterId: 1,
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

  return (
    <div>
      <Typography variant="h4" className="italic underline mb-5">
        {t("Course.course-information")}
      </Typography>
      <div className="flex flex-col gap-8">
        <InputFieldNoBorder title={t("Course.course-title")} />
        <InputFieldNoBorder title={t("Course.course-brief-description")} />
        <div>
          <Typography variant="h6" className="font-bold">
            {t("Course.detail-destination")}
          </Typography>
          <TinyEditor value={editor} setValue={setEditor} />
        </div>
        <div className="flex gap-2 justify-between px-1 flex-wrap">
          <CustomSelect label={t("Course.category")} />
          <CustomSelect label={t("Course.topic")} />
        </div>
        <div className="flex flex-col gap-2">
          <Typography variant="h5" className="font-bold">
            {t("Global.photo")}
          </Typography>
          <UploadImage />
        </div>
        <div className="flex gap-2 justify-between px-1 flex-wrap w-full">
          <InputFieldNoBorder title={t("Course.price")} />
          <InputFieldNoBorder title={t("Course.discount-percent")} />
        </div>
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
              chapter={chapter}
            />
          ))}
          <div className="w-fit ml-2">
            <Button variant="outlined" startIcon={<AddIcon />} onClick={createNewChapter}>
              {t("Course.New.add-more-chapter")}
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8 mb-2">
        <Button variant="contained">
          <Typography className="text-base md:text-xl">
            {t("Course.New.complete-the-course-creation-process")}
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default AddNewCourse;
