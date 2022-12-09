import { UserProfileFeedWrapper } from '../components/userProfile/userProfileFeedWrapper';
import { UserProfileStickyPanel } from '../components/userProfile/userProfileStickyPanel';
import { UserProfileSearchBar } from '../components/userProfile/userProfileSearchBar';
import { UserProfileSidePanel } from '../components/userProfile/userProfileSidePanel';
import { HomeTweetComposer } from '../components/home/homeTweetComposer';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

import userProfileStyles from '../stylesheets/pages/userProfile.module.scss';

const UserProfile: NextPage = () => {
  const { asPath } = useRouter();

  const dynamicPageComponents: { [index: string]: JSX.Element } = {
    '/home': <HomeTweetComposer />,
  };

  return (
    <main className={userProfileStyles.container}>
      <UserProfileSidePanel />
      <div className={userProfileStyles.wrapper}>
        <section className={userProfileStyles.feedWrapper}>
          {dynamicPageComponents[asPath] ?? <UserProfileFeedWrapper />}
        </section>
        <section className={userProfileStyles.sideWrapper}>
          <UserProfileSearchBar />
          <UserProfileStickyPanel />
        </section>
      </div>
    </main>
  );
};

export default UserProfile;
