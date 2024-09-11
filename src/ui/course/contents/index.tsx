"use client";
import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";
import { type Chapter } from "@prisma/client";
import SingleContent from "./single-content";

interface Props {
  listChapter: Chapter[] | null;
}

const ListContent = ({ listChapter }: Props) => {
  const t = useTranslations("Course");

  return (
    <div className="mt-3 md:mt-5">
      <Typography variant="h4" className="capitalize">
        {t("course-contents")}
      </Typography>
      <div className="mt-3">{listChapter?.map((chapter) => <SingleContent key={chapter.id} chapter={chapter} />)}</div>
    </div>
  );
};

export default ListContent;
