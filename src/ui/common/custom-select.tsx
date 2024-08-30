"use client";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { Typography } from "@mui/material";

interface Props {
  label: string;
}

const CustomSelect = ({ label }: Props) => {
  const [selected, setSelected] = React.useState<string>();

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value);
  };

  return (
    <div className="flex flex-col mx-1">
      <Typography className="text-xl font-semibold">{label}</Typography>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={selected}
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
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default CustomSelect;
