"use client";
import { Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslations } from "next-intl";
import toast from "react-hot-toast";
import Oauth2 from "../oauth2";
import InputField from "@/ui/common/input-field";
import PasswordField from "@/ui/common/password-field";
import { Link } from "@/navigation";
import { registerFormSchema } from "@/schemas/register-form.schema";

interface ErrorProps {
  for: string | number;
  message: string;
}

const RegisterForm = () => {
  const t = useTranslations();
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [rePassword, setRePassword] = React.useState<string>("");
  const [errors, setErrors] = React.useState<ErrorProps[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = registerFormSchema.safeParse({
        name,
        email,
        password,
        rePassword,
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
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            rePassword,
          }),
        });

        const json = await res.json();
        if (json.message === "success") {
          toast.success(t("Auth.register-success"));
        } else {
          toast.error(json.message as string);
        }
      } catch (error) {
        toast.error(t("Auth.register-failure"));
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-[60%] max-md:w-full max-lg:w-[80%] mx-auto py-5 max-sm:py-3">
      <Paper elevation={5} className="p-4 w-full" sx={{ bgcolor: "box.bg", color: "box.text" }}>
        <div className="flex items-center flex-col justify-center">
          <Typography variant="h4" className="uppercase">
            {t("Header.signup")}
          </Typography>
          <Oauth2 />
          <form
            className="flex gap-5 flex-col justify-start items-start w-full mt-5 px-4 max-md:px-2"
            onSubmit={onSubmit}
          >
            <InputField
              title="Auth.Form.fullname"
              placeholder="Eg. Brad Traversy"
              value={name}
              setValue={setName}
              errorMessage={errors.find((error) => error.for === "name")?.message}
            />
            <InputField
              title="Auth.Form.email"
              placeholder="Eg. email@domain.com"
              value={email}
              setValue={setEmail}
              errorMessage={errors.find((error) => error.for === "email")?.message}
            />
            <PasswordField
              title="Auth.Form.password"
              value={password}
              setValue={setPassword}
              errorMessage={errors.find((error) => error.for === "password")?.message}
            />
            <PasswordField
              title="Auth.Form.re-password"
              value={rePassword}
              setValue={setRePassword}
              errorMessage={errors.find((error) => error.for === "rePassword")?.message}
            />
            <Stack direction="column" className="w-full" spacing={1} mt={1}>
              <Stack spacing={1} direction="row">
                <Typography>{t("Auth.Form.have-account")}</Typography>
                <Link href={"/auth/login"} className="text-blue-700 hover:underline">
                  {t("Header.login") + " " + t("Global.now")}
                </Link>
              </Stack>
              <Button variant="contained" className="w-full" type="submit" disabled={isLoading}>
                {t("Header.signup")}
              </Button>
            </Stack>
          </form>
        </div>
      </Paper>
    </div>
  );
};

export default RegisterForm;
