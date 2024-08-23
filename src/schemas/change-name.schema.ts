import * as z from "zod";

export const changeNameSchema = z.object({
  name: z.string().min(5, { message: "name" }),
});
