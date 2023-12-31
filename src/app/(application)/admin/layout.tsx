import { authOptions } from "@/lib-server/auth";
import { UserRole } from "@prisma/client";
import { getServerSession } from "next-auth";
import { RedirectType, redirect } from "next/navigation";
import React from "react";

type Props = {};

async function AdminLayout(props: React.PropsWithChildren<Props>) {
  const session = await getServerSession(authOptions);

  if (session?.user.role !== UserRole.ADMIN) {
    return redirect("/auth/signin", RedirectType.replace);
  }

  return <React.Fragment>{props.children}</React.Fragment>;
}

export default AdminLayout;
