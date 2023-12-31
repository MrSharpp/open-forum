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
