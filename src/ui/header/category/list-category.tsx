"use client";
import React, { useEffect } from "react";
import Topic from "./topic";
import Cate from "./cate";

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

const ListCategory = () => {
  useEffect(() => {
    const getCategory = async () => {
      const res = await fetch(`/api/category`);
      const data = await res.json();
    };
    getCategory();
  }, []);

  return (
    <>
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
    </>
  );
};

export default ListCategory;
