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
import { createCategory } from "./action";
import { FormEvent, useEffect, useState } from "react";

export function CreateCategoryDialogue() {
  const [state, formAction] = useFormState(createCategory, null);
  const [open, setOpen] = useState(false);

  const submitCatForm = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    // DISCUSS: await doesnt has effect in below statement
    // lets leave it as it is now
    await formAction(formData);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="text-right	ml-auto">New Category</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create a New Category</DialogTitle>
        </DialogHeader>
        <form onSubmit={submitCatForm}>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-3">
              <Label htmlFor="categoryName" className="sr-only">
                Category Name
              </Label>
              <Input
                id="categoryName"
                placeholder="Category Name"
                name="categoryName"
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-end mt-4">
            <Button type="submit" variant="secondary">
              Create
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
