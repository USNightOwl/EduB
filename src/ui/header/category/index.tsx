import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import React from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import ListCategory from "./list-category";
import { useOutsideClick } from "@/hooks/use-outside-click";

const CategoryGroup = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const ref = useOutsideClick(() => setOpen(false));

  return (
    <div className="relative w-1/12 max-lg:w-full flex items-center justify-center h-10 z-[1000]" ref={ref}>
      <List className="absolute -top-3 left-0 max-lg:left-1/2 max-lg:-translate-x-1/2">
        <ListItemButton onClick={handleClick} className="flex">
          <Button variant="outlined" className="!text-slate-700 !border-slate-400 rounded-lg">
            <ListItemText primary="Category" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </Button>
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit className="shadow bg-slate-50 rounded-b">
          <ListCategory />
        </Collapse>
      </List>
    </div>
  );
};

export default CategoryGroup;
