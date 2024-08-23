"use client";
import { Button, Typography } from "@mui/material";
import React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import EditIcon from "@mui/icons-material/Edit";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useTranslations } from "next-intl";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(0.5),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor:
      theme.palette.background.default == "#ffffff" ? "#F3F6F9" : alpha(theme.palette.background.default, 1),
    border: "1px solid",
    borderColor: theme.palette.box.text,
    fontSize: 20,
    width: "full",
    padding: "10px 12px",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  "& .MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: alpha(theme.palette.primary.main, 0.6),
  },
}));

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root, & .MuiDialogActions-root, & .MuiDialogTitle-root, & .MuiDialogContentText-root, & .MuiDialog-paperScrollPaper":
    {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.box.bg,
      color: theme.palette.box.text,
    },
}));

interface Props {
  value: string;
  title: string;
  type?: "text" | "password";
  children: React.ReactNode;
  Icon: React.ReactNode;
  canChange?: boolean;
}

const PopupChangeAccount = ({ value, children, Icon, title, type = "text", canChange = true }: Props) => {
  const t = useTranslations("Global");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex flex-col">
      <div className="flex gap-1 items-center mb-1">
        {Icon}
        <span>{title}</span>
      </div>
      <div className="flex items-center gap-1">
        <BootstrapInput className="w-full" value={value} disabled type={type} />
        <Button variant="contained" className="h-full w-fit" onClick={handleClickOpen} hidden={!canChange}>
          <EditIcon />
        </Button>
      </div>

      {/* Dialog change account */}
      <BootstrapDialog maxWidth="sm" hidden={!canChange} open={open} onClose={handleClose}>
        <DialogTitle className="flex border-b">
          <Typography className="text-2xl font-bold">{t("change")}&nbsp;</Typography>
          <Typography className="text-2xl lowercase font-bold">{title}</Typography>
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="error">
            {t("close")}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default PopupChangeAccount;
