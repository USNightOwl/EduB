import { type AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prismadb";
import { verificationEmail } from "@/models/user";
const MAX_AGE = 1 * 24 * 60 * 60;

const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  debug: process.env.NODE_ENV === "development" ? true : false,
  session: {
    strategy: "jwt",
    maxAge: MAX_AGE,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/signout",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        return {
          id: "",
          email: "",
          password: "",
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user = {
          image: token.picture,
          email: token.email,
          name: token.name,
        };
      }
      return session;
    },
  },
};

export default authOptions;
