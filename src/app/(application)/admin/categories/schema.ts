import { z } from "zod";

const createCategory = z.object({
  categoryName: z.string(),
});

const updateCategory = createCategory.extend({
  categoryId: z.string(),
});

export const Schema = { createCategory, updateCategory };
