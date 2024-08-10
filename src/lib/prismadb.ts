/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma.$use(async (params: any, next: any) => {
  return next(params) as void;
});

export default prisma;
