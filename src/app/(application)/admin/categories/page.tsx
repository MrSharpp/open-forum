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
import { CreateCategoryDialogue } from "./CreateCategory";

export default async function Categories() {
  const categories = await getAllCategories();

  return (
    <div className="p-7">
      <div className="flex">
        <CreateCategoryDialogue />
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
