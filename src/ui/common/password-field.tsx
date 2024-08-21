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
  value: string;
  errorMessage?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const PasswordField = ({ title, value, setValue, errorMessage, placeholder = "Type your password" }: InputProps) => {
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
        error={errorMessage ? true : false}
        id={`${title}-input`}
        className="w-full"
        placeholder={placeholder}
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
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
      {errorMessage && (
        <Typography className="text-[0.8rem] font-[600] text-[#FF0000]">{t(`Auth.Errors.${errorMessage}`)}</Typography>
      )}
    </div>
  );
};

export default PasswordField;
