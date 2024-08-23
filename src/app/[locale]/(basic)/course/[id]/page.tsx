import Container from "@mui/material/Container";
import React from "react";
import { type Metadata } from "next";
import Banner from "@/ui/course/banner";
import MyBreadcrumbs from "@/ui/common/my-breadcrumbs";
import { type IBreadcumb } from "@/types/global";
import CourseHeader from "@/ui/course/course-header";
import CourseActions from "@/ui/course/actions";
import RelevantCourse from "@/ui/course/relevant-course";

export const metadata: Metadata = {
  title: "EduB - Course React Native - The Practical Guide [2023]",
  description: "Choose your course, master your future",
  icons: "/logo.png",
};

const listBread: IBreadcumb[] = [
  {
    name: "Development",
    slug: "development",
    id: "1",
  },
  {
    name: "Web development",
    slug: "web-development",
    id: "2",
  },
];

const Page = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: Record<string, string | string[] | undefined>;
}) => {
  return (
    <React.Fragment>
      <Banner />
      <Container maxWidth={false} className="p-2 py-4 max-md:px-1 text-white bg-black/90">
        <MyBreadcrumbs listBread={listBread} />
        <CourseHeader />
      </Container>
      <Container maxWidth={false} sx={{ bgcolor: "background.main", color: "primary.main" }} className="max-sm:px-1">
        <Container className="py-4 max-sm:px-1">
          <CourseActions />
        </Container>
        <RelevantCourse />
      </Container>
    </React.Fragment>
  );
};

export default Page;
