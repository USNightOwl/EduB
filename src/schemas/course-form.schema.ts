import * as z from "zod";

export const courseFormSchema = z.object({
  title: z.string().min(1, { message: "title-required" }),
  brief: z.string().min(1, { message: "brief-required" }),
  detail: z.string().min(1, { message: "detail-required" }),
  topic: z.string().min(1, { message: "topic-required" }),
  price: z.number({ message: "price-number" }).int({ message: "price-number" }).gt(1000, { message: "price-gt" }),
  discount: z
    .number({ message: "discount-number" })
    .int({ message: "discount-number" })
    .gte(0, { message: "discount-range" })
    .lte(100, { message: "discount-range" }),
});
