/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem, treeItemClasses } from "@mui/x-tree-view/TreeItem";
import Topic from "./topic";

const listCategory = [
  {
    name: "development",
    slug: "development",
    children: [
      {
        name: "web development",
        slug: "web-development",
      },
      {
        name: "game development",
        slug: "game-development",
      },
    ],
  },
  {
    name: "design",
    slug: "design",
    children: [
      {
        name: "3D & Animation",
        slug: "3d-animation",
      },
      {
        name: "design tools",
        slug: "design-tools",
      },
    ],
  },
  {
    name: "office productivity",
    slug: "office-productivity",
    children: [
      {
        name: "microsoft office",
        slug: "microsoft-office",
      },
      {
        name: "powerpoint",
        slug: "powerpoint",
      },
    ],
  },
  {
    name: "marketing",
    slug: "marketing",
    children: [
      {
        name: "digital marketing",
        slug: "digital-marketing",
      },
    ],
  },
];

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
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}));

const TreeCategory = () => {
  return (
    <SimpleTreeView defaultExpandedItems={["grid"]} className="mt-2 px-2">
      {listCategory.map((category) => {
        if (category.children.length > 0) {
          return (
            <CustomTreeItem
              key={category.slug}
              itemId={category.slug}
              label={category.name}
              className="capitalize text-nowrap"
            >
              {category.children.map((cate) => (
                <Topic key={cate.slug} title={cate.name} slug={cate.slug} />
              ))}
            </CustomTreeItem>
          );
        }
        return <Topic key={category.slug} title={category.name} slug={category.slug} />;
      })}
    </SimpleTreeView>
  );
};

export default TreeCategory;
