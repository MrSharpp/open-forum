"use client";

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
import UnderLineExtension from "@tiptap/extension-underline";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useMemo } from "react";
import WYSIWYG from "./WYSIWYG";
import Link from "next/link";
import { useFormState } from "react-dom";
import { createReply } from "@/app/(application)/thread/[slug]/action";
import { useSession } from "next-auth/react";

export function Reply({ postId }: { postId: string }) {
  const [state, formAction] = useFormState(createReply, null);
  const session = useSession();

  const editor = useEditor({
    extensions: [StarterKit, UnderLineExtension],
    content: "<p>Create Post</p>",
    enablePasteRules: false,
    enableInputRules: false,
  });

  const toolbar = useMemo(
    () => [[Bold, Italic, UnderLine], [Code], [UnOrderedList, OrderedList]],
    []
  );

  let windowPoly =
    typeof window !== "undefined" ? window : { location: { pathname: "" } };

  // TODO: Drop shadow
  // TODO: Make color good

  return (
    <div className="fixed bottom-0  bg-gray-100 p-4 w-[1000px] rounded-lg p-lg">
      <div className="flex justify-between mb-3">
        <h2>Reply to this thread</h2>
        <Link
          href={{
            pathname: windowPoly?.location?.pathname,
            query: null,
          }}
        >
          Close
        </Link>
      </div>
      <form
        onSubmit={async (e) => {
          // TODO: extract into a method
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          formData.append("body", editor!.getHTML());
          formData.append("userId", session?.data?.user?.id as string);
          formData.append("postId", postId);
          formAction(formData);

          if (state?.errors) {
            alert(JSON.stringify(state));
          }
        }}
      >
        <div className="flex flex-col gap-4">
          <div className="grid w-full items-center gap-1.5">
            <WYSIWYG editor={editor} toolbar={toolbar} />
          </div>
        </div>

        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
}
