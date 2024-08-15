import { Container } from "@mui/material";
import { useTranslations } from "next-intl";
import Banner from "@/ui/common/banner";
import CustomSlide from "@/ui/common/custom-slide";
import RecommendedTopic from "@/ui/topic/recommended-topic";

export default function Home() {
  const t = useTranslations("Global.Title.Card");

  return (
    <div>
      <Banner />
      <Container
        maxWidth={false}
        sx={{ bgcolor: "background.main", color: "primary.main" }}
        className="p-2 py-4 max-md:px-1"
      >
        <CustomSlide title={t("popular-course")} description={t("popular-course-desc")} perView={3} />
        <CustomSlide title={t("most-viewing")} isSingleSlide={true} />
        <CustomSlide title={t("newest-course")} />
        <RecommendedTopic />
        <div>Review</div>
      </Container>
    </div>
  );
}
