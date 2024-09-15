import React, { Suspense } from "react";
import Container from "@mui/material/Container";
import LeftSide from "@/ui/category/left-side";
import SideBar from "@/ui/user/side-bar";

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
          <Suspense fallback={<div>Loading...</div>}>
            <LeftSide cateId={cateId} topicId={topicId} />
          </Suspense>
        }
        RightSide={<></>}
      />
    </Container>
  );
};

export default Page;
