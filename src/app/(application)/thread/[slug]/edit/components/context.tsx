"use client";

import React from "react";
import { getPostBySlug } from "../../action";

type TContext = {
  post: Awaited<ReturnType<typeof getPostBySlug>>;
};

export const Context = React.createContext({} as TContext);

export function Provider(props: React.PropsWithChildren<{ value: TContext }>) {
  return (
    <Context.Provider value={props.value}>{props.children}</Context.Provider>
  );
}
