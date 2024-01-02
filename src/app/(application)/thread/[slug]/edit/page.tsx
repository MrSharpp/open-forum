"use client";

import { Editor } from "@/components/Editor";
import { SubmitBtn } from "@/components/ui/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useContext, useEffect } from "react";
import { useFormState } from "react-dom";
import { updatePost } from "./action";
import { Context } from "./components/context";

function EditPost() {
  const { post } = useContext(Context);
  const [state, action] = useFormState(updatePost, null);

  // TODO temporatry fix must be replaced by input error props
  useEffect(() => {
    alert(JSON.stringify(state));
  }, [state]);

  return (
    <div className="p-4">
      <div className="p-4 rounded-sm border">
        <h2 className="font-bold text-xl mb-6">Create new Thread</h2>

        <form
          action={async function (formData) {
            formData.append("id", post.id);
            formData.append("userId", post.userId);

            return action(formData);
          }}
        >
          <div className="flex flex-col gap-4">
            <Input
              label="Title"
              type="title"
              id="title"
              name="title"
              placeholder="Title"
              defaultValue={post.title}
            />

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="text">Text</Label>
              <Editor id="text" name="body" initialValue={post.body} />
            </div>
          </div>

          <div className="flex justify-end">
            <SubmitBtn type="submit" className="mt-2">
              Submit
            </SubmitBtn>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPost;
