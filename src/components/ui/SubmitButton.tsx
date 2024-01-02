"use client";

import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "./button";

export function SubmitBtn(props: ButtonProps) {
  const { pending } = useFormStatus();

  return <Button {...props} loading={pending || props.loading} />;
}
