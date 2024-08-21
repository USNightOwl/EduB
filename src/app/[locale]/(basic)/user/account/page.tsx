import Container from "@mui/material/Container";
import React from "react";
import SideBar from "@/ui/user/side-bar";

const Page = () => {
  return (
    <Container
      maxWidth={false}
      sx={{ bgcolor: "background.main", color: "primary.main" }}
      className="flex gap-2 relative w-full p-0"
    >
      <SideBar />
    </Container>
  );
};

export default Page;
