"use client";
import { signIn, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { Session, getServerSession } from "next-auth";

export function Profile({ session }: { session: Session | null }) {
  if (session) {
    return <>{session.user?.email}</>;
  }

  return <Button onClick={() => signIn()}>Sign In</Button>;
}
