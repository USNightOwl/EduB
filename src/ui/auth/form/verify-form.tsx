"use client";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import toast from "react-hot-toast";
import { type ErrorProps } from "./login-form";
import InputField from "@/ui/common/input-field";
import { verifyFormSchema } from "@/schemas/verify-form.schema";
import { useRouter } from "@/navigation";
import { cn } from "@/lib/utils";

const VerifyForm = () => {
  const t = useTranslations();
  const router = useRouter();

  const [email, setEmail] = React.useState<string>("");
  const [OTP, setOTP] = React.useState<string>("");

  const [errors, setErrors] = React.useState<ErrorProps[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = verifyFormSchema.safeParse({
        email,
        OTP,
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
        const res = await fetch("/api/auth/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            OTP,
          }),
        });

        const json = await res.json();
        if (res.status === 200) {
          toast.success(json.message as string);
          router.push("/auth/login");
        } else {
          toast.error(json.message as string);
        }
      } catch (error) {
        toast.error(t("Auth.verify-failure"));
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (!email) return toast.error("Missing email");
    try {
      const res = await fetch("/api/auth/resend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });
      const json = await res.json();
      if (res.status === 200) {
        toast.success(json.message as string);
      } else toast.error(json.message as string);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-[60%] max-md:w-full max-lg:w-[80%] mx-auto py-5 max-sm:py-3">
      <Paper elevation={5} className="p-4 w-full" sx={{ bgcolor: "box.bg", color: "box.text" }}>
        <div className="flex items-center flex-col justify-center">
          <Typography variant="h4" className="uppercase text-center">
            {t("Auth.verify-account")}
          </Typography>
          <Image src={"/assets/check-mark.png"} height={80} width={80} alt="success" />
          <form
            className="flex gap-5 flex-col justify-start items-start w-full mt-5 px-4 max-md:px-2"
            onSubmit={onSubmit}
          >
            <InputField
              title="Auth.Form.email"
              placeholder="Eg. email@domain.com"
              value={email}
              setValue={setEmail}
              errorMessage={errors.find((error) => error.for === "email")?.message}
            />
            <div
              className={cn(
                "flex gap-2 items-end w-full",
                errors.find((error) => error.for === "OTP")?.message && "items-center",
              )}
            >
              <InputField
                title="Auth.otp"
                placeholder="Eg. 12345"
                value={OTP}
                setValue={setOTP}
                errorMessage={errors.find((error) => error.for === "OTP")?.message}
              />
              <Button variant="contained" className="w-fit text-nowrap" onClick={handleResendOTP}>
                {t("Auth.Form.resend-otp")}
              </Button>
            </div>
            <Stack direction="column" className="w-full" spacing={1} mt={1}>
              <Button variant="contained" color="secondary" className="w-full" type="submit" disabled={isLoading}>
                {t("Global.confirm")}
              </Button>
            </Stack>
          </form>
        </div>
      </Paper>
    </div>
  );
};

export default VerifyForm;
