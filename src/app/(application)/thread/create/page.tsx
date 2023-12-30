"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import UnderLineExtension from "@tiptap/extension-underline";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useMemo } from "react";
import { createPost } from "./action";
import {
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Italic,
  OrderedList,
  UnOrderedList,
  UnderLine,
} from "@/components/ToolbarActions";
import WYSIWYG from "@/components/WYSIWYG";

function CreateThread() {
  const editor = useEditor({
    extensions: [StarterKit, UnderLineExtension],
    content: "<h2>Create Post</h2>",
  });

  const toolbar = useMemo(
    () => [
      [Bold, Italic, UnderLine],
      [Heading1, Heading2, Heading3, Heading4],
      [Code],
      [UnOrderedList, OrderedList],
    ],
    []
  );

  return (
    <div className="p-4">
      <div className="p-4 rounded-sm border">
        <h2 className="font-bold text-xl mb-6">Create new Thread</h2>

        <form action={createPost}>
          <div className="flex flex-col gap-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="title">Title</Label>
              <Input type="title" id="title" placeholder="Title" />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="text">Text</Label>
              <WYSIWYG editor={editor} toolbar={toolbar} />
            </div>
          </div>

          <input type="submit" value={"Submit"} />
        </form>
      </div>
    </div>
  );
}

export default CreateThread;
