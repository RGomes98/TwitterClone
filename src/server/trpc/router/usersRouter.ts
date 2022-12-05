import { protectedProcedure, publicProcedure, router } from '../trpc';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

export const usersRouter = router({
  userById: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input, ctx }) => {
      const { userId } = input;
      const { prisma } = ctx;

      try {
        const user = await prisma.user.findUniqueOrThrow({
          where: {
            id: userId,
          },
          select: {
            username: true,
            image: true,
            name: true,
          },
        });

        return user;
      } catch (err) {
        throw new TRPCError({ code: 'NOT_FOUND', message: 'No User found', cause: err });
      }
    }),

  userByUsername: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(async ({ input, ctx }) => {
      const { username } = input;
      const { prisma } = ctx;

      try {
        const user = await prisma.user.findUniqueOrThrow({
          where: {
            username: username,
          },
          select: {
            backgroundImage: true,
            isVerified: true,
            residesAt: true,
            createdAt: true,
            username: true,
            birthday: true,
            message: true,
            image: true,
            name: true,
          },
        });

        return user;
      } catch (err) {
        throw new TRPCError({ code: 'NOT_FOUND', message: 'No User found', cause: err });
      }
    }),

  usersByUsername: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(async ({ input, ctx }) => {
      const { username } = input;
      const { prisma } = ctx;

      if (!username) return [];

      try {
        const users = await prisma.user.findMany({
          where: {
            username: { contains: username },
          },
          select: {
            isVerified: true,
            username: true,
            message: true,
            image: true,
            name: true,
          },
        });

        return users;
      } catch (err) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Something went wrong',
          cause: err,
        });
      }
    }),
});
