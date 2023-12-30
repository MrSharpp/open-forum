import prisma from "@/lib-server/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { User } from "@prisma/client";
import { Awaitable, NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import Credentials, {
  CredentialsConfig,
} from "next-auth/providers/credentials";

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

  if (!user) return null;

  return user;
};

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
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
    signIn: "/auth",
    newUser: "/",
  },
};
