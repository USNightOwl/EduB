import React from "react";
import { getCategoryById, listCategoriesWithTopics } from "@/models/category";
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";

interface Props {
  cateId: string | string[] | null;
  topicId: string | string[] | null;
}

const LeftSide = async ({ cateId, topicId }: Props) => {
  const categories = await listCategoriesWithTopics();

  return (
    <div className="py-2">
      {categories.map((cate) => (
        <div key={cate.id} className="max-md:flex">
          <Link
            href={{ pathname: "/category", query: { cateId: cate.id } }}
            className={cn(
              "border p-4 capitalize font-semibold text-lg cursor-pointer block",
              cateId === cate.id ? "text-white bg-gradient-to-r from-cyan-500 to-blue-500" : "",
            )}
          >
            {cate.name}
          </Link>
          {cate.topics?.map((topic) => (
            <Link
              href={{ pathname: "/category", query: { cateId: cate.id, topicId: topic.id } }}
              key={topic.id}
              className={cn(
                "border p-4 capitalize text-lg md:pl-10 flex-1 cursor-pointer block",
                topicId === topic.id ? "bg-blue-600" : "",
              )}
            >
              {topic.name}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LeftSide;
