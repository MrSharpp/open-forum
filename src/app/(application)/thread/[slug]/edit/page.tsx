import { authOptions } from "@/lib-server/auth";
import { getServerSession } from "next-auth";
import React from "react";
import { getPostBySlug } from "../action";
import { RedirectType, redirect } from "next/navigation";

type Props = {
  params: { slug: string };
};

async function EditPost({ params }: Props) {
  const session = await getServerSession(authOptions);

  const post = await getPostBySlug(decodeURI(params.slug));

  if (!session || !post || post.User.id !== session?.user.id) {
    return redirect(`/thread/${params.slug}`, RedirectType.replace);
  }

  return <div>Hello</div>;
}

export default EditPost;
