import prisma from "@/lib-server/prisma";

export function getAllCategories() {
  return prisma.category.findMany();
}

export function createCategory() {}
