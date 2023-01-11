import { z } from 'zod';

export const userTweetsOutputSchema = z.object({
  mediaContent: z.string().nullable(),
  textContent: z.string().nullable(),
  createdAt: z.date(),
  author: z.object({
    username: z.string().nullable(),
    image: z.string().nullable(),
    name: z.string().nullable(),
    isVerified: z.boolean(),
  }),
});

export type UserTweets = z.infer<typeof userTweetsOutputSchema>;
