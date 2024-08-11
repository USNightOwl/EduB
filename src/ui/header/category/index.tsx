import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import React from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import Cate from "./cate";
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

const CategoryGroup = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="relative w-1/12 max-lg:w-full flex items-center justify-center h-10 z-[1000]">
      <List className="absolute -top-3 left-0 max-lg:left-1/2 max-lg:-translate-x-1/2">
        <ListItemButton onClick={handleClick}>
          <Button variant="outlined" className="!text-slate-700 !border-slate-400 rounded-lg">
            <ListItemText primary="Category" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </Button>
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit className="shadow bg-slate-50 rounded-b">
          {listCategory.map((cate) => {
            if (cate.children.length > 0) {
              return (
                <Cate title={cate.name} key={cate.slug} slug={cate.slug}>
                  {cate.children.map((topic) => (
                    <Topic title={topic.name} key={topic.slug} />
                  ))}
                </Cate>
              );
            }
            return <Topic title={cate.name} key={cate.slug} />;
          })}
        </Collapse>
      </List>
    </div>
  );
};

export default CategoryGroup;
