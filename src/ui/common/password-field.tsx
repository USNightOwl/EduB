"use client";
import Typography from "@mui/material/Typography";
import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { useTranslations } from "next-intl";
import { BootstrapInput } from "./input-field";

interface InputProps {
  title: string;
  placeholder?: string;
}

const PasswordField = ({ title, placeholder = "Type your password" }: InputProps) => {
  const t = useTranslations();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className="w-full">
      <label htmlFor={`${title}-input`}>
        <Typography className="text-lg">{t(title)}</Typography>
      </label>
      <BootstrapInput
        id={`${title}-input`}
        className="w-full"
        placeholder={placeholder}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff sx={{ color: "box.text" }} /> : <Visibility sx={{ color: "box.text" }} />}
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  );
};

export default PasswordField;
