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
  "& .MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: alpha(theme.palette.primary.main, 0.6),
  },
}));

interface InputProps {
  title: string;
  placeholder?: string;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  errorMessage?: string;
  disabled?: boolean;
}

const InputField = ({ title, value, setValue, errorMessage, placeholder = "", disabled = false }: InputProps) => {
  const t = useTranslations();
  return (
    <div className="w-full">
      <label htmlFor={`${title}-input`}>
        <Typography className="text-lg">{t(title)}</Typography>
      </label>
      <BootstrapInput
        disabled={disabled}
        error={errorMessage ? true : false}
        id={`${title}-input`}
        className="w-full"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          if (setValue) setValue(e.target.value);
        }}
        endAdornment={<></>}
      />
      {errorMessage && errorMessage.length > 0 && (
        <Typography className="text-[0.8rem] font-[600] text-[#FF0000]">{t(`Auth.Errors.${errorMessage}`)}</Typography>
      )}
    </div>
  );
};

export default InputField;
