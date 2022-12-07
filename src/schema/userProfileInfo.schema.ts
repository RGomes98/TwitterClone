import { z } from 'zod';

const UserProfileDataSchema = z.object({
  backgroundImage: z.string().url(),
  isVerified: z.boolean(),
  residesAt: z.string(),
  username: z.string(),
  message: z.string(),
  createdAt: z.date(),
  birthday: z.date(),
  image: z.string(),
  name: z.string(),
});

export type UserProfileData = z.infer<typeof UserProfileDataSchema>;
