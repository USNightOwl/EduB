import { type Session } from "next-auth";
import React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { type TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { Button, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import LogoutIcon from "@mui/icons-material/Logout";
import Image from "next/image";
import { signOut } from "next-auth/react";

interface Props {
  auth: Session;
}

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip leaveDelay={200} {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 500,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

const UserMenu = ({ auth }: Props) => {
  const t = useTranslations("Header");
  return (
    <HtmlTooltip
      title={
        <div className="flex items-center flex-col py-1">
          {auth?.user?.image && (
            <Image src={auth?.user?.image} alt={"avatar"} height={60} width={60} className="rounded-full" />
          )}
          <Typography className="text-base font-bold">{auth?.user?.name}</Typography>
          <Typography className="text-base text-slate-400 mt-1">{auth?.user?.email}</Typography>
          <div className="w-full border-b py-1 mb-2"></div>
          <Button startIcon={<LogoutIcon />} color="error" onClick={() => signOut()}>
            {t("logout")}
          </Button>
        </div>
      }
    >
      <Button className="font-semibold">{auth?.user?.name}</Button>
    </HtmlTooltip>
  );
};

export default UserMenu;
