"use client";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { type ICategory } from "@/types/category";

interface Props {
  label: string;
  data?: ICategory[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  errorMessage?: string;
  disabled?: boolean;
}

const CustomSelect = ({ label, data, value, setValue, errorMessage, disabled = false }: Props) => {
  const t = useTranslations();
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex flex-col mx-1">
      <Typography className="text-xl">{label}</Typography>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={value}
          label={label}
          onChange={handleChange}
          disabled={disabled}
          sx={{
            width: 300,
            color: "primary.main",
            "& .MuiInputBase-root, & .MuiFormLabel-root": {
              color: "primary.main",
            },
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main",
            },
            ".MuiSvgIcon-root": {
              fill: "primary.main",
            },
          }}
        >
          {data?.map((d) => (
            <MenuItem key={d.id} value={d.id}>
              {d.name}
            </MenuItem>
          ))}
        </Select>
        {errorMessage && errorMessage.length > 0 && (
          <Typography className="text-[0.8rem] font-[600] text-[#FF0000]">
            {t(`Auth.Errors.${errorMessage}`)}
          </Typography>
        )}
      </FormControl>
    </div>
  );
};

export default CustomSelect;
