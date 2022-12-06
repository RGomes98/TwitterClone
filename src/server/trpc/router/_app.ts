import { trendingTopicsRouter } from './trendingTopicsRouter';
import { usersRouter } from './usersRouter';
import { router } from '../trpc';

export const appRouter = router({
  trendingTopicsRouter: trendingTopicsRouter,
  usersRouter: usersRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
