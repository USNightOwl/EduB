import * as z from "zod";
import { validateEmail, validateOTPcode } from "@/utils/helper";

export const verifyFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "emai-required" })
    .refine((e) => validateEmail(e), { message: "email-valid" }),
  OTP: z
    .string()
    .length(5, { message: "otp-length" })
    .refine((e) => validateOTPcode(e), { message: "otp-length" }),
});
