import React, { Suspense } from "react";
import Container from "@mui/material/Container";
import LeftSide from "@/ui/category/left-side";
import SideBar from "@/ui/user/side-bar";
import RightSide from "@/ui/category/right-side";
import CategoryListSkeleton from "@/ui/skeleton/category-list-skeleton";

const Page = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: Record<string, string | string[] | undefined>;
}) => {
  const cateId = searchParams?.cateId || null;
  const topicId = searchParams?.topicId || null;

  return (
    <Container
      maxWidth={false}
      sx={{ bgcolor: "background.main", color: "primary.main" }}
      className="flex gap-2 relative w-full p-0 overflow-x-hidden"
    >
      <SideBar
        LeftSide={
          <Suspense fallback={<CategoryListSkeleton />}>
            <LeftSide cateId={cateId} topicId={topicId} />
          </Suspense>
        }
        RightSide={
          <Suspense fallback={<div>Loading...</div>}>
            <RightSide cateId={cateId} topicId={topicId} />
          </Suspense>
        }
      />
    </Container>
  );
};

export default Page;
