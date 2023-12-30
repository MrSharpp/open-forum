import { Button, ButtonGroup } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Editor, EditorContent } from "@tiptap/react";

import "./wysiwwyg.css";

type Props = {
  editor: Editor | null;
  toolbar: {
    icon: (...props: any) => JSX.Element;
    operation: {
      action: keyof Editor["commands"];
      attributes?: Record<string, any>;
    };
    isActive: {
      name: string;
      attributes?: Record<string, any>;
    };
  }[][];
};

function WYSIWYG({ editor, toolbar }: Props) {
  return (
    <div className="block border rounded-md">
      <div className="flex gap-4 p-2 border-b ">
        {/* {toolbar.map((btnGroup, index) => (
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
        ))} */}
      </div>

      <ScrollArea type="always" className="h-[350px] w-full">
        <EditorContent editor={editor} className="w-full prose max-w-full" />
      </ScrollArea>
    </div>
  );
}

export default WYSIWYG;
