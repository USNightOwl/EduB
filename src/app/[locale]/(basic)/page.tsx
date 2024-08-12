import type { Metadata } from "next";
import Banner from "@/ui/banner";
import ChangeLanguage from "@/ui/button/change-language";

export const metadata: Metadata = {
  title: "EduB - Choose your course, master your future",
  description: "Choose your course, master your future",
  icons: "/logo.png",
};

export default function Home() {
  return (
    <div>
      <Banner />
      <ChangeLanguage />
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
    </div>
  );
}
