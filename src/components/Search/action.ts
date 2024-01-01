"use server";
import prisma from "@/lib-server/prisma";

export async function searchPosts(searchTerm: string) {
  if (!searchTerm) return [];

  return await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: searchTerm,
          },
        },
        {
          body: {
            contains: searchTerm,
          },
        },
      ],
    },

    select: {
      id: true,
      title: true,
      created: true,
      slug: true,
      User: {
        select: {
          id: true,
          email: true,
          name: true,
        },
      },
    },
  });
}
