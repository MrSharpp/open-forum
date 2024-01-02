"use server";

import { Schema } from "../../create/schemas";
import prisma from "@/lib-server/prisma";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function updatePost(_: any, formData: FormData) {
  const updatePostFields = Schema.updatePost.safeParse({
    id: formData.get("id"),
    title: formData.get("title"),
    body: formData.get("body"),
    categoryId: "77a4d205-b9aa-45df-b43b-0e6a90a031d8",
    userId: formData.get("userId"),
  });

  if (!updatePostFields.success) {
    return {
      errors: updatePostFields.error.flatten().fieldErrors,
    };
  }

  let post;
  try {
    post = await prisma.post.update({
      data: {
        body: updatePostFields.data.body,
        title: updatePostFields.data.title,
        categoryId: updatePostFields.data.categoryId,
        slug: encodeURIComponent(
          updatePostFields.data.title.replaceAll(" ", "-")
        ),
        userId: updatePostFields.data.userId,
      },
      where: {
        id: updatePostFields.data.id,
      },
    });
  } catch (err) {
    console.log(err);

    return { errors: { title: "Something went wrong while inserting post" } };
  }

  revalidateTag("posts");
  redirect(`/thread/${post.slug}`);
}
