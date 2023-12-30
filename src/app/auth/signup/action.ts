"use server";
import prisma from "@/lib-server/prisma";
import { Schema } from "./schemas";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { RedirectType, redirect } from "next/navigation";
import { z } from "zod";
import argon from "argon2";

export type TSignupFields = z.infer<typeof Schema.signupFields>;

export async function createUser(prevSate: any, data: TSignupFields) {
  const signupFields = Schema.signupFields.safeParse({
    email: data.email,
    password: data.password,
  });

  if (!signupFields.success) {
    return {
      errors: signupFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.user.create({
      data: {
        email: signupFields.data.email,
        password: await argon.hash(signupFields.data.password),
      },
    });
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        return { errors: { email: "Email already exsist" } };
      }
    }

    // TODO: Add to logger to ingest these logs
    console.log(err);

    return { errors: { email: "Something went wrong" } };
  }
  redirect("/auth/signin", RedirectType.replace);
}
