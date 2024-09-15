import React from "react";
import { CustomTreeItem } from ".";
import { Link } from "@/navigation";

interface ITopic {
  title: string;
  slug: string;
  cateId: string;
  topicId?: string;
}

const Topic = ({ title, slug, cateId, topicId }: ITopic) => {
  return (
    <Link href={{ pathname: "/category", query: { cateId: cateId, topicId: topicId } }}>
      <CustomTreeItem itemId={slug} label={title} className="capitalize text-nowrap" sx={{ color: "primary.main" }} />
    </Link>
  );
};

export default Topic;
