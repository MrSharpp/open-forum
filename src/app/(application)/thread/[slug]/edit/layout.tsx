import React from "react";

import { authOptions } from "@/lib-server/auth";
import { getServerSession } from "next-auth";
import { RedirectType, redirect } from "next/navigation";
import { getPostBySlug } from "../action";
import { Provider } from "./components/context";

type Props = {
  params: { slug: string };
};

export default async function RootLayout({
  children,
  params,
}: React.PropsWithChildren<Props>) {
  const session = await getServerSession(authOptions);

  const post = await getPostBySlug(decodeURI(params.slug));

  if (!session || !post || post.User.id !== session?.user.id) {
    return redirect(`/thread/${params.slug}`, RedirectType.replace);
  }

  return <Provider value={{ post }}>{children}</Provider>;
}
