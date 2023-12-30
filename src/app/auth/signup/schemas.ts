import z from "zod";

const signupFields = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const Schema = { signupFields };
