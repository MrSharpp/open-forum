"use client";

import { SessionProvider } from "next-auth/react";

export function RootProviders({ children }: React.PropsWithChildren) {
  return <SessionProvider>{children}</SessionProvider>;
}
