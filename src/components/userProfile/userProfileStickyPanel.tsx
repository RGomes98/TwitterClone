import { UserProfileTrendingTopics } from './userProfileTrendingTopics';
import { SignInButtons } from '../signIn/signInButtons';
import { useStickyBox } from '../../hooks/useStickyBox';
import { useSession } from 'next-auth/react';

import userProfileStyles from '../../stylesheets/components/userProfile/userProfileStickyPanel.module.scss';
import { UserProfilePolicies } from './userProfilePolicies';

export const UserProfileStickyPanel: React.FC = () => {
  const { isScrollDownward, scrollYPosition } = useStickyBox();

  const { data: session } = useSession();

  return (
    <section
      className={userProfileStyles.container}
      style={{ marginTop: `${!isScrollDownward && scrollYPosition + 10}px` }}
    >
      {!session && (
        <div className={userProfileStyles.wrapper}>
          <span className={userProfileStyles.heading}>New to Twitter?</span>
          <span className={userProfileStyles.text}>
            Sign up now to get your own personalized timeline!
          </span>
          <SignInButtons inOrUp={'up'} />
        </div>
      )}
      <UserProfileTrendingTopics />
      <UserProfilePolicies />
    </section>
  );
};
