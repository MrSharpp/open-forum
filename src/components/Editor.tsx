"use client";

import { MDEditorProps } from "@uiw/react-md-editor";
import dynamic from "next/dynamic";
import { useState } from "react";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

interface Props extends Omit<MDEditorProps, "onChange" | "value"> {
  initialValue?: string;
  name?: string;
}

export function Editor({ initialValue, ...props }: Props) {
  const [value, setValue] = useState<string>(initialValue ?? "");

  return (
    <MDEditor
      value={value}
      onChange={(value) => setValue(value ?? "")}
      autoFocus={true}
      preview="edit"
      toolbarBottom
      {...props}
      textareaProps={{ name: props.name, ...(props.textareaProps ?? {}) }}
    />
  );
}
