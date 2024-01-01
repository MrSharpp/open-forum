"use server";

import prisma from "@/lib-server/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Schema } from "./schema";

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

export async function createReply(prevState: any, data: FormData) {
  const fields = Schema.createReply.safeParse({
    body: data.get("body"),
    userId: data.get("userId"),
    postId: data.get("postId"),
  });

  if (!fields.success) {
    return { errors: fields.error.flatten().fieldErrors };
  }

  let reply;

  try {
    // TODO: merge promises
    reply = await prisma.reply.create({
      data: {
        body: fields.data.body,
        User: {
          connect: {
            id: fields.data.userId,
          },
        },
        Post: {
          connect: {
            id: fields.data.postId,
          },
        },
      },
      include: {
        Post: {
          select: {
            slug: true,
          },
        },
      },
    });

    await prisma.notification.create({
      data: {
        message: "Your post has new reply",
        User: {
          connect: {
            id: fields.data.userId,
          },
        },
        href: `/thread/${reply.Post.slug}`,
      },
    });
  } catch (err) {
    console.log(err);
    return { errors: { message: "Something went wrong" } };
  }

  revalidatePath(`/thread/${reply?.Post.slug}`);
  redirect(`/thread/${reply?.Post.slug}`);
}
