import { z } from "zod";

const createReply = z.object({
  body: z.string(),
  userId: z.string(),
  postId: z.string(),
});

export const Schema = { createReply };
