"use server";

import prisma from "@/lib-server/prisma";

export async function getUserNotifications(userId: string) {
  return prisma.notification.findMany({
    where: {
      userId,
    },
    orderBy: {
      created: "desc",
    },
    take: 10,
  });
}

export async function markNotificationsAsRead(userId: string) {
  return prisma.notification.updateMany({
    where: {
      AND: [{ userId }, { read: false }],
    },
    data: {
      read: true,
    },
  });
}

export async function getCategories() {
  return prisma.category.findMany();
}
