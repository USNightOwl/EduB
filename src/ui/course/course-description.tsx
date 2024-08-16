import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import SchoolIcon from "@mui/icons-material/School";

const CourseDescription = () => {
  const t = useTranslations("Course");

  return (
    <Card variant="outlined" sx={{ bgcolor: "box.bg", color: "box.text" }}>
      <CardContent>
        <Typography variant="h6" className="flex items-center gap-3">
          <SchoolIcon />
          {t("what-you-will-learn-header")}
        </Typography>
        <ul className="list-disc pl-4 mt-2">
          <li>Learn how to use ReactJS to build real native mobile apps for iOS and Android</li>
          <li>
            Develop cross-platform (iOS and Android) mobile apps without knowing Swift, ObjectiveC or Java/ Android
          </li>
          <li>Explore React Native basics and advanced features!</li>
          <li>Learn how to use key mobile app features like Google maps or the device camera</li>
          <li>Create real-world native apps using React Native</li>
          <li>Make truly reusable components that look great</li>
          <li>Understand the terminology and concepts of Redux</li>
          <li>Prototype and deploy your own applications to the Apple and Google Play Stores</li>
          <li>Get up to speed with React design principles and methodologies</li>
          <li>Discover mobile design patterns used by experienced engineers</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default CourseDescription;
