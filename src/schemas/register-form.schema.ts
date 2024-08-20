import * as z from "zod";
import { validateEmail } from "@/utils/helper";

export const registerFormSchema = z
  .object({
    name: z.string().min(5, { message: "name" }),
    email: z
      .string()
      .min(1, { message: "emai-required" })
      .refine((e) => validateEmail(e), { message: "email-valid" }),
    password: z.string().min(8, { message: "password" }),
    rePassword: z.string().min(8, { message: "rePassword" }),
  })
  .refine((form) => form.password === form.rePassword, {
    message: "rePassword-match",
    path: ["rePassword"],
  });
