import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";
import SingleContent from "./single-content";

const ListContent = () => {
  const t = useTranslations("Course");

  return (
    <div className="mt-3 md:mt-5">
      <Typography variant="h4" className="capitalize">
        {t("course-contents")}
      </Typography>
      <div className="mt-3">
        {[1, 2, 3].map((item) => (
          <SingleContent key={item} />
        ))}
      </div>
    </div>
  );
};

export default ListContent;
