import { trendingTopicsRouter } from './trendingTopicsRouter';
import { usersRouter } from './usersRouter';
import { tweetRouter } from './tweetRouter';
import { router } from '../trpc';

export const appRouter = router({
  trendingTopicsRouter: trendingTopicsRouter,
  usersRouter: usersRouter,
  tweetRouter: tweetRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
