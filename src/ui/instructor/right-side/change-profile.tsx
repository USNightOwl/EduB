"use client";
import React, { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Typography } from "@mui/material";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import toast from "react-hot-toast";
import TinyEditor from "@/ui/common/tiny-editor";

const ChangeProfile = () => {
  const t = useTranslations();
  const [value, setValue] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  useEffect(() => {
    setValue("");
    async function getBio() {
      try {
        const res = await fetch("/api/auth/update/profile");
        const json = await res.json();
        if (json.message === "success") {
          setValue(json.data as string);
        }
      } catch (error) {}
    }
    getBio();
  }, []);

  const handleUpdateProfile = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/update/profile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bio: value,
        }),
      });
      const json = await res.json();
      if (json.message === "success") {
        toast.success("Update successfully");
      } else {
        toast.error(json.message as string);
      }
    } catch (error) {}
    setIsLoading(false);
  };

  return (
    <div>
      <Typography variant="h5" className="border-b mb-4 font-bold border-slate-500">
        {t("Admin.update-personal-information")}
      </Typography>
      <div className="flex gap-1 flex-col">
        <div className="flex gap-1 items-center px-1 font-semibold">
          <ContactEmergencyIcon />
          <div className="text-lg">{t("Admin.biographic")}</div>
        </div>
        <TinyEditor
          value={value}
          setValue={setValue}
          handleSubmit={handleUpdateProfile}
          title={t("Global.save")}
          disabled={isLoading}
        />
      </div>
    </div>
  );
};

export default ChangeProfile;
