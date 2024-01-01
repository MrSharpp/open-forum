"use client";

import React, { FormEvent, useState } from "react";
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
import { useFormState } from "react-dom";

const DeleteTagDialogue = () => {
  //   const [state, formAction] = useFormState(deleteTag, null);
  //   const [open, setOpen] = useState(false);

  const submitTagForm = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
  };
  return (
    <Dialog>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Confirm Delete Tag</DialogTitle>
        </DialogHeader>

        <form onSubmit={submitTagForm}>
          <DialogDescription>
            Are you confirm want to delete Tag?
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
};

export default DeleteTagDialogue;
