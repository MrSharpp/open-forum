import { useMutation, useQuery } from "@tanstack/react-query";
import { SignInInputs } from "../types";
import { client } from "@/app/axios";

const signin = async (vals: SignInInputs) => {
  return client.post("/api/auth/signin/", {});
};

const useSignIn = (vals: SignInInputs) => {
  return useMutation({
    mutationFn: () => signin(vals),
  });
};

export { useSignIn };
