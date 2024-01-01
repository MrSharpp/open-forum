"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useFormState } from "react-dom";

const TagDialogue = () => {
  //   const createTagForm = useFormState(createTag, null);
  //   const updateTagForm = useFormState(updateTag, null);

  // let [state, formAction] = isUpdate ? updateTagForm : createTagForm;

  const submitTagForm = () => {};

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-right ml-auto">New Tag</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new tag</DialogTitle>
        </DialogHeader>

        <form onSubmit={submitTagForm}>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-3">
              <Label htmlFor="name" className="sr-only">
                Name
              </Label>
              <Input id="tag-name" placeholder="Tag Name" />
            </div>
          </div>
        </form>

        <DialogFooter className="sm:justify-start">
          <Button type="button" variant="secondary">
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TagDialogue;
