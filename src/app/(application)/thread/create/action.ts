"use server";

import prisma from "@/lib-server/prisma";
import { Schema } from "./schemas";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(_: any, formData: FormData) {
  const createPostFields = Schema.createPost.safeParse({
    title: formData.get("title"),
    body: formData.get("body"),
    categoryId: "77a4d205-b9aa-45df-b43b-0e6a90a031d8",
  });

  if (!createPostFields.success) {
    return {
      errors: createPostFields.error.flatten().fieldErrors,
    };
  }
  let post;
  try {
    post = await prisma.post.create({
      data: {
        body: createPostFields.data.body,
        title: createPostFields.data.title,
        categoryId: createPostFields.data.categoryId,
      },
    });
  } catch (err) {
    console.log(err);

    return { errors: { title: "Something went wrong while inserting post" } };
  }

  revalidateTag("posts");
  redirect(`/thread/${post.id}`);
}
