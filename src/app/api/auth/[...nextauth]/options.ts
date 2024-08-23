import { type AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prismadb";
import { auth } from "@/models/user";
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
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid Credentials");
        }

        const user = await auth(credentials.email, credentials.password);

        if (!user) {
          throw new Error("Invalid Credentials");
        }

        return {
          id: user.id,
          image: user.image,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      return true;
    },
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        return { ...token, user: { ...token.user, ...session.user } };
      }
      if (user) {
        return {
          ...token,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            image: user.image,
          },
        };
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
  },
};

export default authOptions;
