import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Topic from "./topic";
import Cate from "./cate";
import { type ICategoryResponse } from "@/types/category";

export default function ClientListCategory() {
  const [categories, setCategories] = React.useState<ICategoryResponse[]>([]);

  React.useEffect(() => {
    const getCategory = async () => {
      const res = await fetch(`/api/category/topic`);
      const json = await res.json();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setCategories(json.data);
    };
    getCategory();
  }, []);

  return (
    <div>
      {categories.length > 0 ? (
        categories.map((cate) => {
          if (cate.topics?.length > 0) {
            return (
              <Cate title={cate.name} key={cate.slug} slug={cate.slug}>
                {cate.topics.map((topic) => (
                  <Topic title={topic.name} key={topic.slug} topicId={topic.id} cateId={cate.id} />
                ))}
              </Cate>
            );
          }
          return <Topic title={cate.name} key={cate.slug} cateId={cate.id} />;
        })
      ) : (
        <div className="w-full flex items-center justify-center py-2">
          <CircularProgress color="inherit" />
        </div>
      )}
    </div>
  );
}
