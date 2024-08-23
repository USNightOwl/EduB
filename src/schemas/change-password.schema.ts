import * as z from "zod";

export const changePasswordSchema = z
  .object({
    cPassword: z.string().min(8, { message: "password" }),
    newPassword: z.string().min(8, { message: "password" }),
    rePassword: z.string().min(8, { message: "rePassword" }),
  })
  .refine((form) => form.newPassword === form.rePassword, {
    message: "rePassword-match",
    path: ["rePassword"],
  });
