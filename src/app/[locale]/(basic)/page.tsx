import type { Metadata } from "next";
import { Container } from "@mui/material";
import Banner from "@/ui/banner";

export const metadata: Metadata = {
  title: "EduB - Choose your course, master your future",
  description: "Choose your course, master your future",
  icons: "/logo.png",
};

export default function Home() {
  return (
    <div>
      <Banner />
      <Container maxWidth={false} sx={{ bgcolor: "background.main", color: "primary.main" }} className="p-2">
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
      </Container>
    </div>
  );
}
