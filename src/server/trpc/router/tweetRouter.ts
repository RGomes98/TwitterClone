import { userTweetsOutputSchema } from '../../../schema/userTweets.schema';
import { protectedProcedure, router } from '../trpc';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

export const tweetRouter = router({
  createTweet: protectedProcedure
    .input(z.object({ textContent: z.string(), mediaContent: z.string().optional() }))
    .mutation(async ({ input, ctx }) => {
      const { textContent, mediaContent } = input;
      const { prisma, session } = ctx;
      const { id: userId } = session.user;

      try {
        await prisma.tweet.create({
          data: {
            textContent,
            mediaContent,
            author: {
              connect: {
                id: userId,
              },
            },
          },
        });
      } catch (err) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Something went wrong',
          cause: err,
        });
      }
    }),

  tweetsByUser: protectedProcedure
    .output(z.array(userTweetsOutputSchema))
    .query(async ({ ctx }) => {
      const { prisma, session } = ctx;
      const { id: userId } = session.user;

      try {
        const userTweets = await prisma.tweet.findMany({
          where: {
            authorId: userId,
          },
          select: {
            author: {
              select: {
                isVerified: true,
                username: true,
                image: true,
                name: true,
              },
            },
            mediaContent: true,
            textContent: true,
            createdAt: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
        });

        return userTweets;
      } catch (err) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Something went wrong',
          cause: err,
        });
      }
    }),
});
