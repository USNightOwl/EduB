"use client";
import { Button, Typography } from "@mui/material";
import React, { type ChangeEvent } from "react";
import { useTranslations } from "next-intl";
import toast from "react-hot-toast";
import SelectCategory from "./new-course/select-category";
import ChapterHandle from "./new-course/chapter-handle";
import InputFieldNoBorder from "@/ui/common/input-field-no-border";
import TinyEditor from "@/ui/common/tiny-editor";
import { type IChapter } from "@/types/course";
import { type ErrorProps } from "@/ui/auth/form/login-form";
import { courseFormSchema } from "@/schemas/course-form.schema";
import InputImage from "@/ui/common/input-image";

const AddNewCourse = () => {
  const t = useTranslations();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [title, setTitle] = React.useState<string>("");
  const [brief, setBrief] = React.useState<string>("");
  const [editor, setEditor] = React.useState<string>("");
  const [price, setPrice] = React.useState<string>("");
  const [discount, setDiscount] = React.useState<string>("");
  const [topic, setTopic] = React.useState<string>("");
  const [attachments, setAttachments] = React.useState<string[]>([]);

  const [errors, setErrors] = React.useState<ErrorProps[]>([]);
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

  function handleOnChange(changeEvent: ChangeEvent<HTMLInputElement>, multiple = true) {
    if (!changeEvent.target.files) return;

    if (multiple) {
      for (const file of Array.from(changeEvent.target.files)) {
        const reader = new FileReader();

        reader.onload = function (onLoadEvent) {
          setAttachments((attachments) => [...attachments, onLoadEvent.target?.result as string]);
        };

        reader.readAsDataURL(file);
      }
    } else {
      const file = Array.from(changeEvent.target.files)[0];
      const reader = new FileReader();

      reader.onload = function (onLoadEvent) {
        setAttachments([onLoadEvent.target?.result as string]);
      };

      reader.readAsDataURL(file);
    }
  }

  const handleSubmit = async () => {
    try {
      const response = courseFormSchema.safeParse({
        title,
        brief,
        detail: editor,
        topic,
        price: parseInt(price),
        discount: parseInt(discount),
      });

      if (!response.success) {
        const errArr: ErrorProps[] = [];
        const { errors: err } = response.error;
        for (const er of err) {
          errArr.push({ for: er.path[0], message: er.message });
        }
        setErrors(errArr);
        console.log(errArr);
        throw err;
      }

      setErrors([]);
      // add new course

      try {
        setIsLoading(true);
        const res = await fetch("/api/course", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            brief,
            detail: editor,
            topicId: topic,
            price: Number(price),
            discount: Number(discount),
            photo: attachments,
            curriculum,
          }),
        });
        const json = await res.json();
        if (res.status === 200) {
          console.log("Course created successfully");
        } else {
          console.log(json.message);
        }
      } catch (error) {
        toast.error(t("Auth.verify-none"));
      }
    } catch (err) {
    } finally {
      setIsLoading(true);
    }
  };

  return (
    <div>
      <Typography variant="h4" className="italic underline mb-5">
        {t("Course.course-information")}
      </Typography>
      <div className="flex flex-col gap-8">
        <InputFieldNoBorder
          title={t("Course.course-title")}
          value={title}
          setValue={setTitle}
          errorMessage={errors.find((error) => error.for === "title")?.message}
          disabled={isLoading}
        />
        <InputFieldNoBorder
          title={t("Course.course-brief-description")}
          value={brief}
          setValue={setBrief}
          errorMessage={errors.find((error) => error.for === "brief")?.message}
          disabled={isLoading}
        />
        <div>
          <Typography variant="h6" className="font-bold">
            {t("Course.detail-description")}
          </Typography>
          <TinyEditor
            value={editor}
            setValue={setEditor}
            errorMessage={errors.find((error) => error.for === "detail")?.message}
            disabled={isLoading}
          />
        </div>
        <SelectCategory
          topic={topic}
          setTopic={setTopic}
          errorMessage={errors.find((error) => error.for === "topic")?.message}
          disabled={isLoading}
        />
        <div className="flex flex-col gap-2">
          <Typography variant="h5" className="font-bold">
            {t("Global.photo")}
          </Typography>
          <InputImage
            attachments={attachments}
            handleOnChange={handleOnChange}
            setAttachments={setAttachments}
            multiple={false}
          />
        </div>
        <div className="flex gap-2 justify-between px-1 flex-wrap w-full">
          <InputFieldNoBorder
            title={t("Course.price")}
            value={price}
            setValue={setPrice}
            disabled={isLoading}
            errorMessage={errors.find((error) => error.for === "price")?.message}
          />
          <InputFieldNoBorder
            title={t("Course.discount-percent")}
            value={discount}
            setValue={setDiscount}
            disabled={isLoading}
            errorMessage={errors.find((error) => error.for === "discount")?.message}
          />
        </div>
        <ChapterHandle curriculum={curriculum} setCurriculum={setCurriculum} />
      </div>
      <div className="flex items-center justify-center mt-8 mb-2">
        <Button variant="contained" onClick={handleSubmit} disabled={isLoading}>
          <Typography className="text-base md:text-xl">
            {t("Course.New.complete-the-course-creation-process")}
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default AddNewCourse;
