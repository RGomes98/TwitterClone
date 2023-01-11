import { HomeTweetComposer } from './homeTweetComposer';
import { trpc } from '../../utils/trpc';

import homeStyles from '../../stylesheets/components/home/homeUserFeedWrapper.module.scss';
import { HomeTweet } from './homeTweet';

export const HomeUserFeedWrapper: React.FC = () => {
  const { data: tweets, isLoading } = trpc.tweetRouter.tweetsByUser.useQuery();

  return (
    <section className={homeStyles.container}>
      <HomeTweetComposer />
      <div className={homeStyles.tweetWrapper}>
        {tweets?.map((tweetInfo, idx) => {
          return <HomeTweet key={idx} {...tweetInfo} />;
        })}
      </div>
    </section>
  );
};
