import prisma from "@/lib-server/prisma";
import { revalidatePath } from "next/cache";
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

      Replies: true,
    },
  });

  // if (!post) return redirect("/");

  return post as NonNullable<typeof post>;
}

export async function getPostSlugs() {
  return await prisma.post.findMany({
    select: {
      slug: true,
    },
  });
}

export async function createComment(slug: string, body: string) {
  await prisma.reply.create({
    data: {
      body: body,
      Post: {
        connect: {
          slug,
        },
      },
    },
  });

  return revalidatePath(`/thread/${slug}`);
}
