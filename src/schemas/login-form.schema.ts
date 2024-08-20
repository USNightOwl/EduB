import * as z from "zod";
import { validateEmail } from "@/utils/helper";

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "emai-required" })
    .refine((e) => validateEmail(e), { message: "email-valid" }),
  password: z.string().min(8, { message: "password" }),
});
