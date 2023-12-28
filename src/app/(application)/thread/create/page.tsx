import { Input } from "@/components/ui/input";
import React from "react";

async function CreateThread() {
  return (
    <div className="p-4">
      <Input title="Title" placeholder="Title" />
    </div>
  );
}

export default CreateThread;
