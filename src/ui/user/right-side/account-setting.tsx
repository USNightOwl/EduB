"use client";
import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import { useSession } from "next-auth/react";
import PopupChangeAccount from "./popup-change-account";
import EditNameForm from "./edit-name-form";
import EditPasswordForm from "./edit-password-form";

const AccountSetting = () => {
  const t = useTranslations();
  const { data: session } = useSession();

  return (
    <div className="pb-4">
      <Typography variant="h5" className="mb-5 font-bold border-b border-b-slate-500 pb-1">
        {t("User.account-setting")}
      </Typography>
      <div className="grid grid-cols-2 gap-8 max-sm:gap-4 max-sm:grid-cols-1">
        <PopupChangeAccount
          value={session?.user?.name || "Loading..."}
          title={t("Auth.Form.fullname")}
          Icon={<PersonIcon />}
        >
          <EditNameForm />
        </PopupChangeAccount>
        <PopupChangeAccount
          value={session?.user?.email || "Loading..."}
          title={t("Auth.Form.email")}
          Icon={<EmailIcon />}
          canChange={false}
        >
          Hello
        </PopupChangeAccount>
        <PopupChangeAccount value="**************" type="password" title={t("Auth.Form.password")} Icon={<KeyIcon />}>
          <EditPasswordForm />
        </PopupChangeAccount>
      </div>
    </div>
  );
};

export default AccountSetting;
