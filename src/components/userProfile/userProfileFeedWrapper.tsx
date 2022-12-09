import type { UserProfileData } from '../../schema/userProfileInfo.schema';
import { LoadingStateSpinner } from '../loadingState/loadingStateSpinner';
import { UserProfileNotFound } from './userProfileNotFound';
import { UserProfileHeading } from './userProfileHeading';
import { UserProfileFilter } from './userProfileFilter';
import { UserProfileInfo } from './userProfileInfo';
import { trpc } from '../../utils/trpc';
import { useRouter } from 'next/router';

import Head from 'next/head';

export const UserProfileFeedWrapper: React.FC = () => {
  const { query } = useRouter();

  const { data: profileData, isLoading } = trpc.usersRouter.userByUsername.useQuery(
    {
      username: query.userProfile as string,
    },
    { refetchOnWindowFocus: false }
  );

  if (isLoading) return <LoadingStateSpinner />;

  return (
    <>
      <Head>
        <title>
          {profileData
            ? `${profileData?.name} (@${profileData?.username}) / Twitter`
            : 'Profile / Twitter'}
        </title>
      </Head>
      <UserProfileHeading
        name={profileData?.name as string}
        isVerified={profileData?.isVerified as boolean}
      />
      <UserProfileInfo {...(profileData as UserProfileData)} />
      <UserProfileFilter hasProfileData={profileData ? true : false} />
      {!profileData && <UserProfileNotFound />}
    </>
  );
};
