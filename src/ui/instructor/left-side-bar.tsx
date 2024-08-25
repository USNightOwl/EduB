"use client";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "next-auth/react";
import { Link, usePathname } from "@/navigation";
import { type TPathname } from "@/utils/locales";
import { cn } from "@/lib/utils";

const listNavigation = [
  {
    title: "Admin.about-your-course",
    icon: <BusinessCenterOutlinedIcon />,
    children: [
      {
        title: "Admin.add-new-course",
        url: "/instructor/course/new",
        icon: <NoteAddOutlinedIcon />,
      },
      {
        title: "Admin.your-courses",
        url: "/instructor/course",
        icon: <LocalLibraryOutlinedIcon />,
      },
    ],
  },
  {
    title: "Admin.personal-profile",
    url: "/instructor/profile",
    icon: <AssignmentIndOutlinedIcon />,
  },
  {
    title: "Admin.account-setting",
    url: "/user/account",
    icon: <ManageAccountsOutlinedIcon />,
  },
];

const LeftSideBar = () => {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <div className="text-center md:pb-4 py-1 md:py-2 bg-[#0c1e35] text-[#b3b8d4] h-full">
      <Typography variant="h6" className="font-bold uppercase pb-2 px-1">
        {t("Admin.management-courses")}
      </Typography>
      <div className="flex md:flex-col justify-center flex-wrap border-y md:mb-5 py-3 border-slate-500">
        {listNavigation.map((nav, idx) =>
          nav.children && nav.children?.length > 0 ? (
            <div key={idx}>
              <div className="transition-colors text-base p-1 md:p-2 flex justify-between max-md:hidden">
                <ContentNavLink title={t(nav.title)} icon={nav.icon} />
              </div>
              <div className="max-md:flex">
                {nav.children.map((nv, idx) => (
                  <Link
                    href={{ pathname: nv.url as TPathname }}
                    key={idx}
                    className={cn(
                      "transition-colors text-base cursor-pointer p-1 md:p-2 hover:bg-slate-400 hover:text-white flex justify-between",
                      pathname === nv.url && "bg-slate-600 text-white",
                    )}
                  >
                    <ContentNavLink title={t(nv.title)} icon={nv.icon} className="pl-4" />
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              href={{ pathname: nav.url as TPathname }}
              key={idx}
              className={cn(
                "transition-colors text-base cursor-pointer p-1 md:p-2 hover:bg-slate-400 hover:text-white flex justify-between",
                pathname === nav.url && "bg-slate-600 text-white",
              )}
            >
              <ContentNavLink title={t(nav.title)} icon={nav.icon} />
            </Link>
          ),
        )}
      </div>
      <Button startIcon={<LogoutIcon />} variant="contained" onClick={() => signOut()} className="max-md:hidden">
        {t("Header.logout")}
      </Button>
    </div>
  );
};

export default LeftSideBar;

const ContentNavLink = ({
  title,
  icon,
  className = "",
}: {
  title: string;
  icon: React.ReactNode;
  className?: string;
}) => {
  return (
    <React.Fragment>
      <div className={cn("flex gap-2 items-center", className)}>
        <div className="max-md:hidden">{icon}</div>
        <span>{title}</span>
      </div>
      <ArrowRightIcon />
    </React.Fragment>
  );
};
