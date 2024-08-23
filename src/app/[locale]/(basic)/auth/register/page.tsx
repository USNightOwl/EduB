import { type Metadata } from "next";
import React from "react";
import { Container } from "@mui/material";
import RegisterForm from "@/ui/auth/form/register-form";

export const metadata: Metadata = {
  title: "EduB - Register - Choose your course, master your future",
  description: "Choose your course, master your future",
  icons: "/logo.png",
};

const Page = () => {
  return (
    <Container maxWidth={false} sx={{ bgcolor: "background.main", color: "primary.main" }}>
      <RegisterForm />
    </Container>
  );
};

export default Page;
