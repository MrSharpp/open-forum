import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import WYSIWYG from "./components/WYSIWYG";

async function CreateThread() {
  return (
    <div className="p-4">
      <div className="p-4 rounded-sm border">
        <h2 className="font-bold text-xl mb-6">Create new Thread</h2>

        <div className="flex flex-col gap-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="title">Title</Label>
            <Input type="title" id="title" placeholder="Title" />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="text">Text</Label>
            <WYSIWYG />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateThread;
