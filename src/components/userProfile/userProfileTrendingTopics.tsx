import { trpc } from '../../utils/trpc';

import userProfileStyles from '../../stylesheets/components/userProfile/userProfileTrendingTopics.module.scss';

export const UserProfileTrendingTopics = () => {
  const { data: trendingTopicsData, isLoading } =
    trpc.trendingTopicsRouter.trendingTopics.useQuery();

  const TRENDS_AMOUNT = 5;

  return (
    <section className={userProfileStyles.container}>
      <span className={userProfileStyles.heading}>What’s happening</span>
      {trendingTopicsData?.[0]?.trends
        .slice(0, TRENDS_AMOUNT)
        .map(({ url, name, tweet_volume }, idx) => {
          return (
            <a className={userProfileStyles.wrapper} href={url} key={idx}>
              <span className={userProfileStyles.text}>Trending in USA</span>
              <span className={userProfileStyles.text}>{name}</span>
              <span className={userProfileStyles.text}>
                {new Intl.NumberFormat('en-US', { notation: 'compact' }).format(
                  tweet_volume as number
                )}{' '}
                Tweets
              </span>
            </a>
          );
        })}
      <button className={userProfileStyles.button}>Show more</button>
    </section>
  );
};
