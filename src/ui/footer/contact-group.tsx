import React from "react";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTranslations } from "next-intl";

const ContactGroup = () => {
  const t = useTranslations("Footer");

  return (
    <div className="flex gap-6 sm:gap-10 flex-col">
      <div className="text-4xl font-bold pb-2">EduB</div>
      <ul className="gap-8 flex flex-col font-light">
        <li className="flex items-center gap-2">
          <PhoneEnabledIcon />
          <span>(090) 9988 321</span>
        </li>
        <li className="flex items-start gap-2">
          <LocationOnIcon />
          <span>{t("address")}</span>
        </li>
      </ul>
    </div>
  );
};

export default ContactGroup;
