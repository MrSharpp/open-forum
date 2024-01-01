"use server";

import prisma from "@/lib-server/prisma";

export async function toggleLikePost(replyId: string, userId: string) {
  const previousLike: any[] =
    await prisma.$queryRaw`SELECT * FROM _LikedBy WHERE _LikedBy.A = ${replyId} AND _LikedBy.B = ${userId}`;

  const doesLikeExists = !!previousLike.length;

  console.log(doesLikeExists);

  const action = doesLikeExists ? "disconnect" : "connect";

  return await prisma.reply.update({
    data: {
      Likes: {
        [action]: {
          id: userId,
        },
      },
    },

    where: {
      id: replyId,
    },
  });
}
