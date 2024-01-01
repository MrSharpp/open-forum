import dynamic from "next/dynamic";
import { useState } from "react";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export function Editor() {
  const [value, setValue] = useState<string>();

  return (
    <MDEditor
      value={value}
      onChange={setValue}
      autoFocus={true}
      preview="edit"
      toolbarBottom
    />
  );
}
