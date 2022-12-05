import { router } from '../trpc';
import { usersRouter } from './usersRouter';

export const appRouter = router({
  usersRouter: usersRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
