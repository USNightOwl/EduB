"use client";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { Typography } from "@mui/material";
import { type ICategory } from "@/types/category";

interface Props {
  label: string;
  data?: ICategory[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const CustomSelect = ({ label, data, value, setValue }: Props) => {
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
      </FormControl>
    </div>
  );
};

export default CustomSelect;
