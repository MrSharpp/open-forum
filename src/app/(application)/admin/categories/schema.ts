import { z } from "zod";

const createCategory = z.object({
  categoryName: z.string(),
});

export const Schema = { createCategory };
