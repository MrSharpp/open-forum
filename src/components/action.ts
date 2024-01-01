"use server";

import prisma from "@/lib-server/prisma";

export async function getUserNotifications(userId: string) {
  return prisma.notification.findMany({
    where: {
      userId,
    },
  });
}
