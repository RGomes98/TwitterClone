import { trendingTopicsOutputSchema } from '../../../schema/trendingTopics.schema';
import { publicProcedure, router } from '../trpc';
import { env } from '../../../env/server.mjs';
import { TRPCError } from '@trpc/server';
import type { z } from 'zod';
import axios from 'axios';

type TrendingTopics = z.infer<typeof trendingTopicsOutputSchema>;

export const trendingTopicsRouter = router({
  trendingTopics: publicProcedure.output(trendingTopicsOutputSchema).query(async () => {
    const REGION_ID = '23424977';

    const twitterAPI = axios.create({
      baseURL: `${env.TWITTER_API_URL}${REGION_ID}`,
      headers: {
        Authorization: `Bearer ${env.TWITTER_API_BEARER_TOKEN}`,
      },
    });

    try {
      const { data: trendingTopics } = await twitterAPI.get<TrendingTopics>('');

      return trendingTopics;
    } catch (err) {
      throw new TRPCError({
        code: 'TOO_MANY_REQUESTS',
        message: 'TwitterAPI request limit reached',
        cause: err,
      });
    }
  }),
});
