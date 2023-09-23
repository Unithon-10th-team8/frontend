import * as z from "zod";

export type Profile = {
  logo?: string;
  name: string;
  affiliation?: string;
  rank?: string;
  phone?: string;
  email?: string;
  isEnableAlarm?: boolean;
  alarmMonth?: number;
  alarmDay?: number;
  memo?: string;
};

export const contactDetailValidationSchema: z.ZodObject<
  Record<keyof Profile, z.ZodTypeAny>
> = z.object({
  logo: z.string().optional(),
  name: z.string().nonempty(),
  affiliation: z.string().optional(),
  rank: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  isEnableAlarm: z.boolean().optional(),
  alarmMonth: z.number().optional(),
  alarmDay: z.number().optional(),
  memo: z.string().optional(),
});
