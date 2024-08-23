"use client";
import React from "react";
import { Button } from "@mui/material";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { type ErrorProps } from "@/ui/auth/form/login-form";
import PasswordField from "@/ui/common/password-field";
import { changePasswordSchema } from "@/schemas/change-password.schema";

const EditPasswordForm = () => {
  const t = useTranslations("Global");
  const { data: session, update } = useSession();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [errors, setErrors] = React.useState<ErrorProps[]>([]);
  const [curretPassword, setCurrentPassword] = React.useState<string>("");
  const [newPassword, setNewPassword] = React.useState<string>("");
  const [rePassword, setRePassword] = React.useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = changePasswordSchema.safeParse({
        newPassword,
        rePassword,
        cPassword: curretPassword,
      });

      if (!response.success) {
        const errArr: ErrorProps[] = [];
        const { errors: err } = response.error;
        for (const er of err) {
          errArr.push({ for: er.path[0], message: er.message });
        }
        setErrors(errArr);
        throw err;
      }

      setErrors([]);
      // all good, now
      try {
        const res = await fetch("/api/auth/update/password", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: curretPassword,
            newPassword,
          }),
        });
        const json = await res.json();
        if (json.message === "success") {
          toast.success("Update password successfully");
          setCurrentPassword("");
          setNewPassword("");
          setRePassword("");
        } else {
          toast.error(json.message as string);
        }
      } catch (error) {}
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-2 sm:min-w-[500px]" onSubmit={handleSubmit}>
      <PasswordField
        title="Auth.Form.current-password"
        value={curretPassword}
        setValue={setCurrentPassword}
        errorMessage={errors.find((error) => error.for === "cPassword")?.message}
        disabled={isLoading}
      />
      <PasswordField
        title="Auth.Form.new-password"
        value={newPassword}
        setValue={setNewPassword}
        errorMessage={errors.find((error) => error.for === "newPassword")?.message}
        disabled={isLoading}
      />
      <PasswordField
        title="Auth.Form.re-password"
        value={rePassword}
        setValue={setRePassword}
        errorMessage={errors.find((error) => error.for === "rePassword")?.message}
        disabled={isLoading}
      />
      <Button className="mt-2 mb-0" variant="contained" type="submit" disabled={isLoading}>
        {t("save")}
      </Button>
    </form>
  );
};

export default EditPasswordForm;
