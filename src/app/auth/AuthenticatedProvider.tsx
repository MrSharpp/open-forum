"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

export function AuthenticatedProvider({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}
