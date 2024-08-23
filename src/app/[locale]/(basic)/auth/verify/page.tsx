import { Container } from "@mui/material";
import React from "react";
import { type Metadata } from "next";
import VerifyForm from "@/ui/auth/form/verify-form";

export const metadata: Metadata = {
  title: "EduB - Verify - Choose your course, master your future",
  description: "Choose your course, master your future",
  icons: "/logo.png",
};

const Page = () => {
  return (
    <Container maxWidth={false} sx={{ bgcolor: "background.main", color: "primary.main" }}>
      <VerifyForm />
    </Container>
  );
};

export default Page;
