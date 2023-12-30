"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

export function AuthenticatedProvider({ children }: React.PropsWithChildren) {
  const session = useSession();
  // TODO: Add loader when status is loading

  if (session.status === "authenticated") redirect("/");

  return <>{children}</>;
}
