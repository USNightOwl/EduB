import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "@/context/GlobalContext";

interface ICate {
  children: React.ReactNode;
  title: string;
  slug: string;
}

const Cate = ({ children, title, slug }: ICate) => {
  const { cateOpenSlug, setCateOpenSlug } = useContext(GlobalContext)!;
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
    if (!open) setCateOpenSlug(slug);
  };

  useEffect(() => {
    if (cateOpenSlug !== slug) setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cateOpenSlug]);

  return (
    <React.Fragment>
      <ListItemButton onClick={handleClick} className="text-slate-700">
        <ListItemText primary={title} className="capitalize text-nowrap" />
        {open && cateOpenSlug === slug ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open && cateOpenSlug === slug} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export default Cate;
