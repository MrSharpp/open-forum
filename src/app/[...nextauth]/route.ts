import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import prisma from "@/lib-server/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    EmailProvider({
      server: {
        host: "sandbox.smtp.mailtrap.io",
        port: 465,
        auth: {
          user: "4d789072dd2e7d",
          pass: "f89fc1d082eba7",
        },
      },
    }),
  ],
});

export { handler as GET, handler as POST };
