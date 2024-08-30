"use client";
import React from "react";
import TextField from "@mui/material/TextField";

interface Props {
  title: string;
  fontSize?: string;
}

const InputFieldNoBorder = ({ title, fontSize = "25px" }: Props) => {
  return (
    <div>
      <TextField
        id="standard-basic"
        label={title}
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
    </div>
  );
};

export default InputFieldNoBorder;
