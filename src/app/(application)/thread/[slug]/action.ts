import prisma from "@/lib-server/prisma";
import { redirect } from "next/navigation";

export async function getPostBySlug(slug: string) {
  const post = await prisma.post.findUnique({
    where: {
      slug,
    },
    include: {
      User: {
        select: {
          name: true,
          image: true,
          email: true,
          id: true,
        },
      },
    },
  });

  if (!post) return redirect("/");

  return post;
}
