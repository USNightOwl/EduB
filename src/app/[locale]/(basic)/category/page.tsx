import React from "react";

const Page = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: Record<string, string | string[] | undefined>;
}) => {
  return <div>{searchParams?.cateID}</div>;
};

export default Page;
