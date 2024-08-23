import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  export interface User {
    id: string;
    name: string | null;
    role: string;
    email: string | null;
    image: string | null;
  }
  export interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: User;
  }
}
