import { z } from "zod";

const createPost = z.object({
  title: z.string(),
  body: z.string(),
  categoryId: z.string(),
  userId: z.string(),
});

const updatePost = createPost.extend({
  id: z.string(),
});

export const Schema = { createPost, updatePost };
