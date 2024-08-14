import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import React from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import { useTranslations } from "next-intl";
import ListCategory from "./list-category";
import { useOutsideClick } from "@/hooks/use-outside-click";

const CategoryGroup = () => {
  const t = useTranslations("Header");
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const ref = useOutsideClick(() => setOpen(false));

  return (
    <div className="relative w-[170px] flex items-center justify-center h-10 z-[1000]" ref={ref}>
      <List className="absolute -top-[0.675rem] left-0">
        <ListItemButton onClick={handleClick} className="flex">
          <Button variant="outlined" className="rounded-lg" size="small">
            <ListItemText primary={t("category")} className="text-nowrap" />
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
