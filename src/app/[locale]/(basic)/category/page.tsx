import React from "react";
import LeftSide from "@/ui/category/left-side";

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
    <div className="flex gap-3">
      <div className="w-4/12">
        <LeftSide />
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default Page;
