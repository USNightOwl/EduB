import React from "react";
import { CustomTreeItem } from ".";

interface ITopic {
  title: string;
  slug: string;
}

const Topic = ({ title, slug }: ITopic) => {
  return (
    <CustomTreeItem itemId={slug} label={title} className="capitalize text-nowrap" sx={{ color: "primary.main" }} />
  );
};

export default Topic;
