"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import SchoolIcon from "@mui/icons-material/School";

const CourseDescription = ({ description }: { description: string }) => {
  const t = useTranslations("Course");

  return (
    <Card variant="outlined" sx={{ bgcolor: "box.bg", color: "box.text" }}>
      <CardContent>
        <Typography variant="h6" className="flex items-center gap-3">
          <SchoolIcon />
          {t("what-you-will-learn-header")}
        </Typography>
        <div className="prose" dangerouslySetInnerHTML={{ __html: description }}></div>
      </CardContent>
    </Card>
  );
};

export default CourseDescription;
