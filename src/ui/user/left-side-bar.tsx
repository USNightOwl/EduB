import { Button, Typography } from "@mui/material";
import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useTranslations } from "next-intl";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "next-auth/react";

const LeftSideBar = () => {
  const t = useTranslations();

  return (
    <div className="text-center md:pb-4">
      <Typography variant="h4" className="pb-2 md:pb-4 px-1">
        {t("User.user-profile")}
      </Typography>
      <div className="flex md:flex-col justify-center flex-wrap border-y md:mb-5 py-3">
        <Typography className="transition-colors text-lg cursor-pointer p-1 md:p-2 hover:bg-slate-600 hover:text-white flex justify-between">
          <span>{t("User.my-learning")}</span>
          <ArrowRightIcon />
        </Typography>
        <Typography className="transition-colors text-lg cursor-pointer p-1 md:p-2 hover:bg-slate-600 hover:text-white flex justify-between">
          <span>{t("User.my-watchlist")}</span>
          <ArrowRightIcon />
        </Typography>
        <Typography className="transition-colors text-lg cursor-pointer p-1 md:p-2 hover:bg-slate-600 hover:text-white flex justify-between">
          <span>{t("User.account")}</span>
          <ArrowRightIcon />
        </Typography>
      </div>
      <Button startIcon={<LogoutIcon />} variant="contained" onClick={() => signOut()} className="max-md:hidden">
        {t("Header.logout")}
      </Button>
    </div>
  );
};

export default LeftSideBar;
