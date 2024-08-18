import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import { useTranslations } from "next-intl";
import ChangeLanguage from "../button/change-language";
import { Link } from "@/navigation";

const LoginGroup = () => {
  const t = useTranslations("Header");

  return (
    <div className="flex items-center justify-center gap-1">
      <div className="max-lg:hidden">
        <ChangeLanguage />
      </div>
      <Button variant="text" className="gap-1 text-nowrap">
        <Link href={"/auth/register"}>
          <PersonIcon />
          {t("signup")}
        </Link>
      </Button>
      <Button variant="contained" className="gap-1 text-nowrap">
        <Link href={"/auth/login"}>
          <LoginIcon />
          {t("login")}
        </Link>
      </Button>
    </div>
  );
};

export default LoginGroup;
