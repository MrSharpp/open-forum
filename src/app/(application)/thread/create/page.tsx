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
import { useFormState } from "react-dom";

function CreateThread() {
  const [state, formAction] = useFormState(createPost, null);

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

        <form
          onSubmit={async (e) => {
            // TODO: extract into a method
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            formData.append("body", editor!.getHTML());
            await formAction(formData);
            if (state?.errors) {
              alert(JSON.stringify(state));
            }
          }}
        >
          <div className="flex flex-col gap-4">
            <Input
              label="Title"
              type="title"
              id="title"
              name="title"
              placeholder="Title"
            />

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
