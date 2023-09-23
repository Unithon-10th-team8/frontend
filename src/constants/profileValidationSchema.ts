import { ContactInput } from "@/api";
import * as z from "zod";

export const contactDetailValidationSchema: z.ZodObject<
  Record<keyof ContactInput, z.ZodTypeAny>
> = z.object({
  name: z.string(),
  organization: z.string().nullish().optional(),
  position: z.string().nullish().optional(),
  phone: z.string().nullish().optional(),
  email: z.string().nullish().optional(),
  category: z.string(),
  profile_image_url: z.string().nullish().optional(),
  content: z.string().nullish().optional(),
  is_important: z.boolean().optional(),
  repeat_interval: z.string().nullish().optional(),
  repeat_base_date: z.string().nullish().optional(),
});
