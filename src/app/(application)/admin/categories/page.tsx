import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { getAllCategories } from "./action";
import { CategoryDialogue } from "./components/CategoryDialogue";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Categories({
  searchParams,
}: {
  searchParams?: { isUpdate: boolean; categoryId: string };
}) {
  console.log(searchParams);
  const categories = await getAllCategories();

  let updatableCategory;

  if (searchParams?.isUpdate) {
    updatableCategory = categories.find(
      (cat) => cat.id == searchParams.categoryId
    );
    // TODO: if category is not found, refresh page so isUpdate is removed from query paramater
  }

  return (
    <div className="p-7">
      <div className="flex">
        <CategoryDialogue
          isUpdate={searchParams?.isUpdate}
          category={updatableCategory}
        />
      </div>

      <Table className="mt-3">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">S No.</TableHead>
            <TableHead>Category Name</TableHead>
            <TableHead>Posts Count</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {categories.map((cat, index) => (
            <TableRow key={cat.id}>
              <TableCell className="font-medium">{index}</TableCell>
              <TableCell>{cat.name}</TableCell>
              <TableCell>{cat._count.Post}</TableCell>
              {/* TODO: Fix css, add Link Button custom component */}
              <TableCell className="flex gap-3">
                <Link
                  href={`?isUpdate=true&categoryId=${cat.id}`}
                  className="h-6 w-6"
                >
                  <Pencil1Icon className="h-4 w-4" />
                </Link>
                <Button variant="outline" size="icon" className="h-6 w-6">
                  <TrashIcon className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
