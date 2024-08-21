import { Container } from "@mui/material";
import React from "react";
import VerifyForm from "@/ui/auth/form/verify-form";

const Page = () => {
  return (
    <Container maxWidth={false} sx={{ bgcolor: "background.main", color: "primary.main" }}>
      <VerifyForm />
    </Container>
  );
};

export default Page;
