import Container from "@mui/material/Container";
import React from "react";
import { type Metadata } from "next";
import SideBar from "@/ui/user/side-bar";
import LeftSideBar from "@/ui/instructor/left-side-bar";
import AddNewCourse from "@/ui/instructor/right-side/add-new-course";
import Category from "@/ui/instructor/right-side/category";

export const metadata: Metadata = {
  title: "EduB - Category - Choose your course, master your future",
  description: "Choose your course, master your future",
  icons: "/logo.png",
};

const Page = () => {
  return (
    <Container
      maxWidth={false}
      sx={{ bgcolor: "background.main", color: "primary.main" }}
      className="flex gap-2 relative w-full p-0 overflow-x-hidden"
    >
      <SideBar LeftSide={<LeftSideBar />} RightSide={<Category />} />
    </Container>
  );
};

export default Page;