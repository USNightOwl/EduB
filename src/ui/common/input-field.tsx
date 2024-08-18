"use client";
import Typography from "@mui/material/Typography";
import React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useTranslations } from "next-intl";

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(0.5),
  },
  "& .MuiInputBase-input": {
    color: theme.palette.primary.main,
    borderRadius: 4,
    position: "relative",
    backgroundColor:
      theme.palette.background.default == "#ffffff" ? "#F3F6F9" : alpha(theme.palette.background.default, 0.8),
    border: "1px solid",
    borderColor: alpha(theme.palette.background.default, 0.9),
    fontSize: 20,
    width: "full",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "background-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
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
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
  "&.Mui-error .MuiInputBase-input": {
    border: "2px solid",
    borderColor: theme.palette.error.main,
    color: theme.palette.error.main,
  },
}));

interface InputProps {
  title: string;
  placeholder?: string;
}

const InputField = ({ title, placeholder = "" }: InputProps) => {
  const t = useTranslations();
  return (
    <div className="w-full">
      <label htmlFor={`${title}-input`}>
        <Typography className="text-lg">{t(title)}</Typography>
      </label>
      <BootstrapInput error={false} id={`${title}-input`} className="w-full" placeholder={placeholder} />
      {/* <Typography ml={1} className="text-xs text-[#FF0000]">
        Please not leave this field blank
      </Typography> */}
    </div>
  );
};

export default InputField;
