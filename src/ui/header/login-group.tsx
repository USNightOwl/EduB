import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";

const LoginGroup = () => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text" className="gap-1">
        <PersonIcon />
        Signup
      </Button>
      <Button variant="contained" className="gap-1">
        <LoginIcon />
        Login
      </Button>
    </Stack>
  );
};

export default LoginGroup;
