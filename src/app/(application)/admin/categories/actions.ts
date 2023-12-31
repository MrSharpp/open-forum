import prisma from "@/lib-server/prisma";
import { Schema } from "./schemas";
import { redirect } from "next/navigation";

export function getAllCategories() {
  return prisma.category.findMany();
}

// TODO: ! NEED DISCUSSION BEFORE CONTINUING IT !
// make a common middleware for function, or a proxy
// which takes a schema and validate the form data

export async function createCategory(_: any, data: FormData) {
  const fields = Schema.createCategory.safeParse({
    name: data.get("name"),
  });

  if (!fields.success) {
    return {
      errors: fields.error.flatten().fieldErrors,
    };
  }

  // TODO: create unique constraint on category name column

  try {
    await prisma.category.create({
      data: {
        name: fields.data.name,
      },
    });
  } catch (err) {
    console.log(err);
    return { errors: { message: "Something wennt wrong" } };
  }

  redirect(`/category`);
}
