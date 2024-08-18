import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

const ListContent = () => {
  const t = useTranslations("Course");

  return (
    <div className="mt-3 md:mt-5">
      <Typography variant="h4" className="capitalize">
        {t("course-contents")}
      </Typography>
      <div></div>
    </div>
  );
};

export default ListContent;
