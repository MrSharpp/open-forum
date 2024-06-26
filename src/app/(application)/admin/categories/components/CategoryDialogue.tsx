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
import { createCategory, updateCategory } from "../action";
import { FormEvent, useEffect, useState } from "react";
import { Category } from "@/lib-server/types";
import { useRouter } from "next/navigation";

export function CategoryDialogue({
  isUpdate,
  category,
}: {
  isUpdate?: boolean;
  category?: Category;
}) {
  const createFormState = useFormState(createCategory, null);
  const updateFormState = useFormState(updateCategory, null);
  const router = useRouter();

  let [state, formAction] = isUpdate ? updateFormState : createFormState;

  const [open, setOpen] = useState(false);

  const submitCatForm = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    // TODO: if user doesnt changes the value, dont call the server action
    if (isUpdate) {
      formData.append("categoryId", category?.id as string);
    }

    await formAction(formData);

    if (typeof state?.errors != "undefined") {
      alert(JSON.stringify(state?.errors));
    }
  };

  useEffect(() => {
    setOpen(!!isUpdate);
  }, [isUpdate]);

  // FIXME: as you might have observed that while updating category the title isnt changed
  // we can achivee it by conditionally rendering it, but it wont be good for code readability
  // hence for that reason, my suggestion would be seperate the to componnet into 2 seperate file one for create and another for update

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
                defaultValue={isUpdate ? category?.name : ""}
              />
            </div>
          </div>
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
