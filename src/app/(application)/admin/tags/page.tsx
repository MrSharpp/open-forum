import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import DeleteTagDialogue from "./components/DeleteTagDialogue";
import TagDialogue from "./components/TagDialogue";

const Tags = () => {
  // const tags = getAllTags();
  const tags = [
    {
      id: "1",
      name: "Tag One",
      _count: { Post: "20" },
    },
  ];
  return (
    <div>
      <TagDialogue />
      <DeleteTagDialogue />

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
          {tags.map((tag, index) => (
            <TableRow key={tag.id}>
              <TableCell className="font-medium">{index}</TableCell>
              <TableCell>{tag.name}</TableCell>
              <TableCell>{tag._count.Post}</TableCell>

              <TableCell className="flex gap-3">
                <Link
                  href={`?isUpdate=true&categoryId=${tag.id}`}
                  className="h-6 w-6"
                >
                  <Pencil1Icon className="h-4 w-4" />
                </Link>

                <Link
                  href={`?isDelete=true&categoryId=${tag.id}`}
                  className="h-6 w-6"
                >
                  <TrashIcon className="h-4 w-4" />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Tags;
