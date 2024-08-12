import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import { useTranslations } from "next-intl";

const LoginGroup = () => {
  const t = useTranslations("Header");

  return (
    <Stack spacing={2} direction="row">
      <Button variant="text" className="gap-1">
        <PersonIcon />
        {t("signup")}
      </Button>
      <Button variant="contained" className="gap-1">
        <LoginIcon />
        {t("login")}
      </Button>
    </Stack>
  );
};

export default LoginGroup;
