"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";

interface Props {
  value: string;
  setValue: (data: string) => void;
  title: string;
  fontSize?: string;
  errorMessage?: string;
  disabled?: boolean;
}

const InputFieldNoBorder = ({ title, value, setValue, errorMessage, fontSize = "25px", disabled = false }: Props) => {
  const t = useTranslations();

  return (
    <div>
      <TextField
        id="standard-basic"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label={title}
        disabled={disabled}
        variant="standard"
        className="w-full"
        sx={{
          "& .MuiInput-underline, & .MuiFormLabel-root": {
            color: "primary.main",
            fontSize,
            "&:after": {
              borderColor: "primary.main",
              borderWidth: "1px",
            },
          },
        }}
      />
      {errorMessage && errorMessage.length > 0 && (
        <Typography className="text-[0.8rem] font-[600] text-[#FF0000]">{t(`Auth.Errors.${errorMessage}`)}</Typography>
      )}
    </div>
  );
};

export default InputFieldNoBorder;
