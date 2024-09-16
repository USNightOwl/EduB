/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem, treeItemClasses } from "@mui/x-tree-view/TreeItem";
import CircularProgress from "@mui/material/CircularProgress";
import Topic from "./topic";
import { type ICategoryResponse } from "@/types/category";

export const CustomTreeItem = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.mode === "light" ? theme.palette.grey[800] : theme.palette.grey[200],

  [`& .${treeItemClasses.content}`]: {
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(0.5, 1),
    margin: theme.spacing(0.2, 0),
    [`& .${treeItemClasses.label}`]: {
      fontSize: "0.8rem",
      fontWeight: 500,
    },
  },
  [`& .${treeItemClasses.iconContainer}`]: {
    borderRadius: "50%",
    backgroundColor:
      theme.palette.mode === "light" ? alpha(theme.palette.primary.main, 0.25) : theme.palette.primary.dark,
    color: theme.palette.mode === "dark" && theme.palette.primary.contrastText,
    padding: theme.spacing(0, 1.2),
  },
  [`& .${treeItemClasses.groupTransition}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.primary.main, 0.4)}`,
  },
}));

const TreeCategory = () => {
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
    <SimpleTreeView defaultExpandedItems={["grid"]} className="mt-2 px-2">
      {categories.length <= 0 && (
        <div className="w-full flex items-center justify-center">
          <CircularProgress />
        </div>
      )}
      {categories?.map((category) => {
        if (category.topics?.length > 0) {
          return (
            <CustomTreeItem
              key={category.slug}
              itemId={category.slug}
              label={category.name}
              sx={{ color: "primary.main" }}
              className="capitalize text-nowrap"
            >
              {category.topics.map((cate) => (
                <Topic key={cate.slug} title={cate.name} slug={cate.slug} cateId={category.id} topicId={cate.id} />
              ))}
            </CustomTreeItem>
          );
        }
        return <Topic key={category.slug} title={category.name} slug={category.slug} cateId={category.id} />;
      })}
    </SimpleTreeView>
  );
};

export default TreeCategory;
