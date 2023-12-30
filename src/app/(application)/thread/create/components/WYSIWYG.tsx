"use client";

import { Button, ButtonGroup } from "@/components/ui/button";
import UnderLineExtension from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useMemo } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

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
} from "./ToolbarActions";
import "./wysiwwyg.css";

function WYSIWYG() {
  const editor = useEditor({
    extensions: [StarterKit, UnderLineExtension],
    content: "<p>Hello World! 🌎️</p>",
  });

  type IToolbarBtnSchema = {
    icon: (...props: any) => JSX.Element;
    operation: {
      action: keyof NonNullable<typeof editor>["commands"];
      attributes?: Record<string, any>;
    };
    isActive: {
      name: string;
      attributes?: Record<string, any>;
    };
  };

  const toolbarBtns = useMemo(
    (): IToolbarBtnSchema[][] => [
      [Bold, Italic, UnderLine],
      [Heading1, Heading2, Heading3, Heading4],
      [Code],
      [UnOrderedList, OrderedList],
    ],
    []
  );

  return (
    <div className="block border rounded-md">
      <div className="flex gap-4 p-2 border-b ">
        {toolbarBtns.map((btnGroup, index) => (
          <ButtonGroup key={index}>
            {btnGroup.map((btn, index) => (
              <Button
                key={index}
                size="icon"
                className="h-7 w-7"
                variant={
                  editor?.isActive(btn.isActive.name, btn.isActive.attributes)
                    ? "default"
                    : "outline"
                }
                onClick={() =>
                  (editor as any)!
                    .chain()
                    .focus()
                    [btn.operation.action](btn.operation.attributes)
                    .run()
                }
              >
                <btn.icon size={16} />
              </Button>
            ))}
          </ButtonGroup>
        ))}
      </div>

      <ScrollArea type="always" className="h-[350px] w-full">
        <EditorContent editor={editor} className="w-full prose max-w-full" />
      </ScrollArea>
    </div>
  );
}

export default WYSIWYG;
