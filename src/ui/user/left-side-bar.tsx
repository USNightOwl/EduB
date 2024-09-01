"use client";
import { Button, Typography } from "@mui/material";
import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useTranslations } from "next-intl";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "next-auth/react";
import { Link, usePathname } from "@/navigation";
import { type TPathname } from "@/utils/locales";
import { cn } from "@/lib/utils";

const listNavigation = [
  {
    title: "User.my-learning",
    url: "/user/my-learning",
  },
  {
    title: "User.my-watchlist",
    url: "/user/my-watchlist",
  },
  {
    title: "User.account",
    url: "/user/account",
  },
];

const LeftSideBar = () => {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <div className="py-1 md:py-2 text-center md:pb-4">
      <Typography variant="h4" className="pb-2 md:pb-4 px-1">
        {t("User.user-profile")}
      </Typography>
      <div className="flex md:flex-col justify-center flex-wrap border-y md:mb-5 py-3 gap-1">
        {listNavigation.map((nav, idx) => (
          <Link
            href={{ pathname: nav.url as TPathname }}
            key={idx}
            className={cn(
              "rounded-xl transition-colors text-lg cursor-pointer p-1 md:p-2 hover:bg-slate-400 hover:text-white flex justify-between",
              pathname === nav.url && "bg-slate-600 text-white",
            )}
          >
            <span className="pl-1">{t(nav.title)}</span>
            <ArrowRightIcon />
          </Link>
        ))}
      </div>
      <Button startIcon={<LogoutIcon />} variant="contained" onClick={() => signOut()} className="max-md:hidden">
        {t("Header.logout")}
      </Button>
    </div>
  );
};

export default LeftSideBar;
