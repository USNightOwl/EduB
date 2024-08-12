import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prisma = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV === "development") globalThis.prisma = prisma;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
prisma.$use(async (params: any, next: any) => {
  return next(params) as void;
});

export default prisma;
