import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Oauth2 = () => {
  const t = useTranslations();
  return (
    <div className="mt-2 flex flex-col items-center justify-center">
      <Typography>{t("Global.with")}</Typography>
      <div className="flex gap-3 items-center my-2">
        <div className="cursor-pointer">
          <Image src="/assets/facebook.png" width={40} height={40} alt="facebook" />
        </div>
        <div className="cursor-pointer">
          <Image src="/assets/google.png" width={40} height={40} alt="google" />
        </div>
      </div>
      <Typography>{t("Auth.Form.email-account")}</Typography>
    </div>
  );
};

export default Oauth2;
