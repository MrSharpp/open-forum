import prisma from "@/lib-server/prisma";

export async function getHomepagePosts() {
  return prisma.post.findMany({
    orderBy: {
      created: "desc",
    },
  });
}
