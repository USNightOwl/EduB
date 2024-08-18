import { Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslations } from "next-intl";
import Oauth2 from "../oauth2";
import InputField from "@/ui/common/input-field";
import PasswordField from "@/ui/common/password-field";
import { Link } from "@/navigation";

const LoginForm = () => {
  const t = useTranslations();

  return (
    <div className="flex w-[60%] max-md:w-full max-lg:w-[80%] mx-auto py-5 max-sm:py-2">
      <Paper elevation={5} className="p-4 w-full" sx={{ bgcolor: "box.bg", color: "box.text" }}>
        <div className="flex items-center flex-col justify-center">
          <Typography variant="h4" className="uppercase">
            {t("Header.login")}
          </Typography>
          <Oauth2 />
          <form className="flex gap-5 flex-col justify-start items-start w-full mt-5 px-4 max-md:px-2">
            <InputField title="Auth.Form.email" placeholder="Eg. email@domain.com" />
            <PasswordField title="Auth.Form.password" />
            <Stack direction="column" className="w-full" spacing={1} mt={1}>
              <Stack spacing={1} direction="row">
                <Typography>{t("Auth.Form.not-a-member")}</Typography>
                <Link href={"/auth/register"} className="text-blue-700 hover:underline">
                  {t("Header.signup") + " " + t("Global.now")}
                </Link>
              </Stack>
              <Button variant="contained" className="w-full">
                {t("Header.login")}
              </Button>
            </Stack>
          </form>
        </div>
      </Paper>
    </div>
  );
};

export default LoginForm;
