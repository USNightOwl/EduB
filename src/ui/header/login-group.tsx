import React from "react";
import { useSession } from "next-auth/react";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import { useTranslations } from "next-intl";
import CircularProgress from "@mui/material/CircularProgress";
import ChangeLanguage from "../button/change-language";
import UserMenu from "./user-menu";
import { Link } from "@/navigation";
import { AUTH_STATUS } from "@/types/global";

const LoginGroup = ({ handleClose }: { handleClose?: () => void }) => {
  const { data: session, status } = useSession();
  const t = useTranslations("Header");
  const handleClick = () => {
    if (handleClose) {
      handleClose();
    }
  };

  return (
    <div className="flex items-center justify-center gap-1">
      <div className="max-lg:hidden">
        <ChangeLanguage />
      </div>
      {status === AUTH_STATUS.LOADING ? (
        <CircularProgress />
      ) : (
        <React.Fragment>
          {status === "authenticated" ? (
            <UserMenu auth={session} />
          ) : (
            <React.Fragment>
              <Button variant="text" className="gap-1 text-nowrap">
                <Link href={"/auth/register"} onClick={handleClick}>
                  <PersonIcon />
                  {t("signup")}
                </Link>
              </Button>
              <Button variant="contained" className="gap-1 text-nowrap">
                <Link href={"/auth/login"} onClick={handleClick}>
                  <LoginIcon />
                  {t("login")}
                </Link>
              </Button>
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default LoginGroup;
