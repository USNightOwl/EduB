import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { Link } from "@/navigation";

interface ITopic {
  title: string;
  cateId: string;
  topicId?: string;
}

const Topic = ({ title, cateId, topicId }: ITopic) => {
  return (
    <ListItemButton sx={{ pl: 4 }}>
      <Link href={{ pathname: "/category", query: { cateId: cateId, topicId: topicId } }}>
        <ListItemText primary={title} className="capitalize text-nowrap text-slate-700" />
      </Link>
    </ListItemButton>
  );
};

export default Topic;
