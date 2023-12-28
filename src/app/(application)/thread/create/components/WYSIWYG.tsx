"use client";

import React, { useMemo } from "react";
import {
  useEditor,
  EditorContent,
  ChainedCommands,
  UnionCommands,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import UnderLine from "@tiptap/extension-underline";
import { Button } from "@/components/ui/button";
import { IconBold, IconItalic, IconUnderline } from "@tabler/icons-react";

import "./wysiwwyg.css";

function WYSIWYG() {
  const editor = useEditor({
    extensions: [StarterKit, UnderLine],
    content: "<p>Hello World! 🌎️</p>",
  });

  type IToolbarBtnSchema = {
    icon: (...props: any) => JSX.Element;
    operation: {
      name: string;
      action: keyof NonNullable<typeof editor>["commands"];
    };
  };

  const toolbarBtns = useMemo(
    (): IToolbarBtnSchema[] => [
      {
        icon: IconBold,
        operation: {
          name: "bold",
          action: "toggleBold",
        },
      },
      {
        icon: IconItalic,
        operation: {
          name: "italic",
          action: "toggleItalic",
        },
      },
      {
        icon: IconUnderline,
        operation: {
          name: "underline",
          action: "toggleUnderline",
        },
      },
    ],
    []
  );

  return (
    <div className="block">
      <div className="flex gap-2 py-2">
        {toolbarBtns.map((btn, index) => (
          <Button
            key={index}
            size="icon"
            className="h-7 w-7"
            variant={
              editor?.isActive(btn.operation.name) ? "default" : "outline"
            }
            onClick={() =>
              (editor as any)!.chain().focus()[btn.operation.action]().run()
            }
          >
            <btn.icon size={16} />
          </Button>
        ))}
      </div>

      <EditorContent editor={editor} className="w-full prose max-w-full" />
    </div>
  );
}

export default WYSIWYG;
