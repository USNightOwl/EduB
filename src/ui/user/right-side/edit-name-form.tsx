"use client";
import React from "react";
import { Button } from "@mui/material";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import InputField from "@/ui/common/input-field";
import { type ErrorProps } from "@/ui/auth/form/login-form";
import { changeNameSchema } from "@/schemas/change-name.schema";

const EditNameForm = () => {
  const t = useTranslations("Global");
  const { data: session, update } = useSession();
  const [name, setName] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [errors, setErrors] = React.useState<ErrorProps[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = changeNameSchema.safeParse({
        name,
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
        const res = await fetch("/api/auth/update/name", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
          }),
        });
        const json = await res.json();
        if (json.message === "success") {
          toast.success("Update successfully");
          await update({
            ...session,
            user: {
              name: json.data.name,
            },
          });
          setName("");
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
    <form className="flex flex-col gap-4 sm:min-w-[500px]" onSubmit={handleSubmit}>
      <InputField
        title="Auth.Form.current-name"
        placeholder={session?.user?.name || "Loading..."}
        value={session?.user?.name || "Loading..."}
        disabled={true}
      />
      <InputField
        title="Auth.Form.new-name"
        placeholder="Eg. Brad Traversy"
        value={name}
        setValue={setName}
        errorMessage={errors.find((error) => error.for === "name")?.message}
        disabled={isLoading}
      />
      <Button className="mt-3 mb-0" variant="contained" type="submit" disabled={isLoading}>
        {t("save")}
      </Button>
    </form>
  );
};

export default EditNameForm;
