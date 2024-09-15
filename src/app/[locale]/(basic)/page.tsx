import { Container } from "@mui/material";
import { Suspense } from "react";
import Banner from "@/ui/common/banner";
import RecommendedTopic from "@/ui/topic/recommended-topic";
import NewestCourseSlider from "@/ui/home/newest-course-slider";
import CourseCardSkeleton from "@/ui/skeleton/course-card-skeleton";
import MostViewingSlider from "@/ui/home/most-viewing-slider";

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
          // 3 khoa hoc noi bat nhat trong tuan qua (dang ki nhieu nhat trong tuan + xem nhieu nhat trong tuan)
        */}
        <Suspense fallback={<CourseCardSkeleton numberOfSlide={1} />}>
          <MostViewingSlider />
        </Suspense>
        <Suspense fallback={<CourseCardSkeleton />}>
          <NewestCourseSlider />
        </Suspense>
        {/* 5 linh vuc duoc dang ki hoc nhieu nhat trong tuan qua */}
        <RecommendedTopic />
      </Container>
    </div>
  );
}
