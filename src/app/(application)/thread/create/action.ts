"use server";

import prisma from "@/lib-server/prisma";
import { Schema } from "./schemas";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(_: any, formData: FormData) {
  const createPostFields = Schema.createPost.safeParse({
    title: formData.get("title"),
    body: formData.get("body"),
    categoryId: formData.get("categoryId"),
  });

  if (!createPostFields.success) {
    return {
      errors: createPostFields.error.flatten().fieldErrors,
    };
  }

  try {
    const post = await prisma.post.create({
      data: {
        body: createPostFields.data.body,
        title: createPostFields.data.title,
        categoryId: createPostFields.data.categoryId,
      },
    });

    revalidateTag("posts");
    redirect(`/post/${post.id}`);
  } catch (err) {
    return { errors: { title: "Something went wrong while inserting post" } };
  }
}
