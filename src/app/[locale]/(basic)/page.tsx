import { Container } from "@mui/material";
import { Suspense } from "react";
import Banner from "@/ui/common/banner";
import RecommendedTopic from "@/ui/topic/recommended-topic";
import NewestCourseSlider from "@/ui/home/newest-course-slider";
import CourseCardSkeleton from "@/ui/skeleton/course-card-skeleton";

export default function Home() {
  return (
    <div>
      <Banner />
      <Container
        maxWidth={false}
        sx={{ bgcolor: "background.main", color: "primary.main" }}
        className="p-2 py-4 max-md:px-1"
      >
        {/* <CustomSlide title={t("popular-course")} description={t("popular-course-desc")} perView={3} />
        <CustomSlide title={t("most-viewing")} isSingleSlide={true} /> */}
        <Suspense fallback={<CourseCardSkeleton />}>
          <NewestCourseSlider />
        </Suspense>
        <RecommendedTopic />
      </Container>
    </div>
  );
}
