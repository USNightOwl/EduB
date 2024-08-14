import type { Metadata } from "next";
import { Container } from "@mui/material";
import { useTranslations } from "next-intl";
import Banner from "@/ui/banner";
import CustomSlide from "@/ui/common/custom-slide";

export const metadata: Metadata = {
  title: "EduB - Choose your course, master your future",
  description: "Choose your course, master your future",
  icons: "/logo.png",
};

export default function Home() {
  const t = useTranslations("Global.Title.Card");

  return (
    <div>
      <Banner />
      <Container
        maxWidth={false}
        sx={{ bgcolor: "background.main", color: "primary.main" }}
        className="p-2 py-3 max-md:px-1"
      >
        <CustomSlide title={t("popular-course")} description={t("popular-course-desc")} perView={2} />
        <CustomSlide title={t("most-viewing")} isSingleSlide={true} />
        <CustomSlide title={t("newest-course")} />
      </Container>
    </div>
  );
}
