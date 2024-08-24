"use client";
import { type Session } from "next-auth";
import React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { type TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { Button, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import LogoutIcon from "@mui/icons-material/Logout";
import Image from "next/image";
import { signOut } from "next-auth/react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import SchoolIcon from "@mui/icons-material/School";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import { Link } from "@/navigation";
import { type TPathname } from "@/utils/locales";

interface Props {
  auth: Session;
  handleCloseRoot?: () => void;
}

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    PopperProps={{
      disablePortal: true,
    }}
    leaveDelay={200}
    {...props}
    classes={{ popper: className }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 500,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

const listNavigation = [
  {
    title: "User.my-learning",
    icon: <SchoolIcon />,
    url: "/user/my-learning",
    isAD: true,
    isUser: true,
  },
  {
    title: "User.my-watchlist",
    icon: <BookmarkIcon />,
    url: "/user/my-watchlist",
    isAD: true,
    isUser: true,
  },
  {
    title: "User.account",
    icon: <ManageAccountsIcon />,
    url: "/user/account",
    isAD: false,
    isUser: true,
  },
  {
    title: "User.account",
    icon: <AssignmentIndOutlinedIcon />,
    url: "/instructor/profile",
    isAD: true,
    isUser: false,
  },
  {
    title: "User.course",
    icon: <LocalLibraryOutlinedIcon />,
    url: "/instructor/course",
    isAD: true,
    isUser: false,
  },
];

const UserMenu = ({ auth, handleCloseRoot }: Props) => {
  const t = useTranslations();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCloseAll = () => {
    handleClose();
    if (typeof handleCloseRoot === "function") {
      handleCloseRoot();
    }
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        <HtmlTooltip
          open={open}
          onClose={handleClose}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={
            <div className="flex items-center flex-col py-1">
              {auth?.user?.image && (
                <Image src={auth?.user?.image} alt={"avatar"} height={60} width={60} className="rounded-full" />
              )}
              <Typography className="text-base font-bold">{auth?.user?.name}</Typography>
              {auth?.user?.role === "ADMIN" && (
                <Typography className="text-sm text-green-600 font-semibold">{auth?.user?.role}</Typography>
              )}
              <Typography className="text-base text-slate-400 mt-1">{auth?.user?.email}</Typography>
              <div className="flex flex-col mt-4 w-full">
                {listNavigation.map((nav, idx) => {
                  if ((auth?.user?.role === "ADMIN" && nav.isAD) || (auth?.user?.role !== "ADMIN" && nav.isUser))
                    return (
                      <Link
                        key={idx}
                        href={{ pathname: nav.url as TPathname }}
                        onClick={handleCloseAll}
                        className="flex items-center hover:text-amber-500 transition-colors cursor-pointer w-full gap-3 justify-start border-t py-2 px-4"
                      >
                        {nav.icon}
                        <Typography>{t(nav.title)}</Typography>
                      </Link>
                    );
                  return <div key={idx} className="hidden"></div>;
                })}
              </div>
              <div className="w-full border-b mb-2"></div>
              <Button startIcon={<LogoutIcon />} color="error" onClick={() => signOut()}>
                {t("Header.logout")}
              </Button>
            </div>
          }
        >
          <Button onClick={handleOpen} className="font-semibold">
            {auth?.user?.name}
          </Button>
        </HtmlTooltip>
      </div>
    </ClickAwayListener>
  );
};

export default UserMenu;
