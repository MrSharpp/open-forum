"use server";

import prisma from "@/lib-server/prisma";
import { Schema } from "./schema";
import { redirect } from "next/navigation";

export async function getAllCategories() {
  return prisma.category.findMany({
    include: {
      _count: {
        select: {
          Post: true,
        },
      },
    },
  });
}

export async function updateCategory(_: any, formData: FormData) {
  const validated = Schema.updateCategory.safeParse({
    categoryName: formData.get("categoryName"),
    categoryId: formData.get("categoryId"),
  });

  if (!validated.success) {
    return { errors: validated.error.flatten().fieldErrors };
  }

  const { data } = validated;

  console.log("updated,", data);

  try {
    await prisma.category.update({
      where: {
        id: data.categoryId,
      },
      data: {
        name: data.categoryName,
      },
    });
  } catch (err) {
    console.log(err);
    return { errors: { message: "Something went wronng" } };
  }

  redirect("/admin/categories");
}

export async function createCategory(_: any, data: FormData) {
  const validated = Schema.createCategory.safeParse({
    categoryName: data.get("categoryName"),
  });

  if (!validated.success) {
    return { errors: validated.error.flatten().fieldErrors };
  }

  const { data: catData } = validated;

  try {
    await prisma.category.create({
      data: {
        name: catData.categoryName,
      },
    });
  } catch (err) {
    console.log(err);
    return { errors: { message: "Something went wronng" } };
  }

  redirect("/admin/categories");
}
