import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import React from "react";

interface ITopic {
  title: string;
}

const Topic = ({ title }: ITopic) => {
  return (
    <ListItemButton sx={{ pl: 4 }}>
      <ListItemText primary={title} className="capitalize text-nowrap text-slate-700" />
    </ListItemButton>
  );
};

export default Topic;
