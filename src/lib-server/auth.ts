import prisma from "@/lib-server/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { User } from "@prisma/client";
import { Awaitable, NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import Credentials, {
  CredentialsConfig,
} from "next-auth/providers/credentials";
import argon from "argon2";
import { UserRole } from "./enums";

type Credentials = Record<"email" | "password", string> | undefined;

const authorize: CredentialsConfig["authorize"] = async (
  credentials: Credentials,
  req
) => {
  if (!credentials) return null;

  const user = await prisma.user.findUnique({
    where: {
      email: credentials.email,
    },
  });

  if (!user || !(await argon.verify(user.password, credentials.password))) {
    console.log("Unaturhozied");
    return null;
  }

  return user;
};

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  secret: process.env.AUTH_SECRET,
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your Email",
        },
        password: { label: "Password", type: "password" },
      },
      authorize,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    session: async ({ session, token, user }) => {
      if (session?.user) {
        session.user.id = token.sub;
        session.user.role = token.role;
      }
      return session;
    },
    jwt(params) {
      console.log(1, params);
      if (params.user) {
        params.token.role = params.user.role;
      }
      return params.token;
    },
  },
  session: { strategy: "jwt" },
};

declare module "next-auth" {
  interface Session {
    user: {
      role: unknown;
      id: string | undefined;
    };
  }

  interface User {
    role: UserRole;
  }
}
