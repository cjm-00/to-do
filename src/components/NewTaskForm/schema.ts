import * as z from "zod";

export const categories = [
  "CLEANING",
  "PROJECTS",
  "ERRANDS",
  "STUDY",
  "EXERCISE",
] as const;

export const schema = z.object({
  task: z.string().min(1).optional(),
  category: z.enum(categories).optional(),
});

export type TaskFormData = z.infer<typeof schema>;
