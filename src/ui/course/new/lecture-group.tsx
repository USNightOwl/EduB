import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import InputFieldNoBorder from "@/ui/common/input-field-no-border";
import { type ILecture } from "@/types/course";
import { type IEditLecture } from "@/ui/instructor/right-side/new-course/chapter-handle";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface Props {
  lecture: ILecture;
  chapterId: number;
  removeLecture: (chapterId: number, lectureId: number) => void;
  changeLectureVariable: ({ chapterId, lectureId, lectureName, urlVideo, preview }: IEditLecture) => void;
}

const LectureGroup = ({ lecture, chapterId, removeLecture, changeLectureVariable }: Props) => {
  const t = useTranslations();
  const [name, setName] = React.useState<string>(lecture.lectureName);
  const [url, setUrl] = React.useState<string>(lecture.urlVideo);
  const [preview, setPreview] = React.useState<boolean>(lecture.preview);

  const handleChangeName = (data: string) => {
    setName(data);
    changeLectureVariable({ chapterId, lectureId: lecture.lectureId, lectureName: data, urlVideo: url, preview });
  };

  const handleChangeUrl = (data: string) => {
    setUrl(data);
    changeLectureVariable({ chapterId, lectureId: lecture.lectureId, lectureName: name, urlVideo: data, preview });
  };

  const handleChangePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setPreview(checked);
    changeLectureVariable({
      chapterId,
      lectureId: lecture.lectureId,
      lectureName: name,
      urlVideo: url,
      preview: checked,
    });
  };

  return (
    <div className="flex gap-5 pl-5 items-start">
      <Typography className="text-lg text-nowrap">
        {t("Course.New.lecture")} {lecture.lectureId}:
      </Typography>
      <div className="w-full flex gap-5 items-end flex-wrap">
        <InputFieldNoBorder
          fontSize="20px"
          title={t("Course.New.lecture-name")}
          value={name}
          setValue={handleChangeName}
        />
        <InputFieldNoBorder fontSize="20px" title={"URL Video"} value={url} setValue={handleChangeUrl} />
        <div className="flex items-center">
          <Checkbox
            {...label}
            sx={{ color: "primary.main" }}
            checked={preview ? preview : false}
            onChange={handleChangePreview}
          />
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
