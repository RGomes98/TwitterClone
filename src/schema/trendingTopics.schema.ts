import { z } from 'zod';

export const trendingTopicsOutputSchema = z.array(
  z.object({
    trends: z.array(
      z.object({
        tweet_volume: z.number().nullable(),
        promoted_content: z.null(),
        url: z.string().url(),
        query: z.string(),
        name: z.string(),
      })
    ),
    locations: z.array(
      z.object({
        woeid: z.number(),
        name: z.string(),
      })
    ),
    created_at: z.string(),
    as_of: z.string(),
  })
);

export type TrendingTopics = z.infer<typeof trendingTopicsOutputSchema>;
