/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState, useFormStatus } from "react-dom";
import { createCategory, deleteCategory, updateCategory } from "../action";
import { FormEvent, useEffect, useState } from "react";
import { Category } from "@/lib-server/types";
import { useRouter } from "next/navigation";
import { BlobOptions } from "buffer";

export function DeleteCategoryDialogue({
  category,
  isDelete,
}: {
  category?: Category;
  isDelete?: boolean;
}) {
  const [state, formAction] = useFormState(deleteCategory, null);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setOpen(!!isDelete);
  }, [isDelete]);

  const submitCatForm = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    await formAction(formData);

    if (typeof state?.errors != "undefined") {
      alert(JSON.stringify(state?.errors));
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(flag: boolean) => {
        if (flag === false) {
          // there can be a better way for this
          router.push("/admin/categories");
        }
        setOpen(flag);
      }}
    >
      <DialogTrigger asChild>
        <Button className="text-right	ml-auto">Delete Category</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Confirm Delete Category</DialogTitle>
        </DialogHeader>
        <form onSubmit={submitCatForm}>
          <DialogDescription>
            Are you confirm want to delete {category?.name} category?
          </DialogDescription>
          <DialogFooter className="sm:justify-end mt-4">
            <Button type="submit" variant="secondary">
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
