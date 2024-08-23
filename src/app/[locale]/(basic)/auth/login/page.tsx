import { type Metadata } from "next";
import React from "react";
import { Container } from "@mui/material";
import LoginForm from "@/ui/auth/form/login-form";

export const metadata: Metadata = {
  title: "EduB - Login - Choose your course, master your future",
  description: "Choose your course, master your future",
  icons: "/logo.png",
};

const Page = () => {
  return (
    <Container maxWidth={false} sx={{ bgcolor: "background.main", color: "primary.main" }}>
      <LoginForm />
    </Container>
  );
};

export default Page;
