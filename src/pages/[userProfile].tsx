import type { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from 'next';
import { UserProfileStickyPanel } from '../components/userProfile/userProfileStickyPanel';
import { UserProfileSearchBar } from '../components/userProfile/userProfileSearchBar';
import { UserProfileSidePanel } from '../components/userProfile/userProfileSidePanel';
import { UserProfileNotFound } from '../components/userProfile/userProfileNotFound';
import { UserProfileHeading } from '../components/userProfile/userProfileHeading';
import { UserProfileFilter } from '../components/userProfile/userProfileFilter';
import { LoadingStateLogo } from '../components/loadingState/loadingStateLogo';
import { UserProfileInfo } from '../components/userProfile/userProfileInfo';
import type { UserProfileData } from '../schema/userProfileInfo.schema';
import { trpc } from '../utils/trpc';

import Head from 'next/head';

import userProfileStyles from '../stylesheets/pages/userProfile.module.scss';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const username = ctx?.params?.userProfile;

  return {
    props: {
      username,
    },
  };
};

const UserProfile: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  username,
}) => {
  const { data: profileData, isLoading } = trpc.usersRouter.userByUsername.useQuery(
    {
      username: username as string,
    },
    { refetchOnWindowFocus: false }
  );

  if (isLoading) return <LoadingStateLogo />;

  return (
    <>
      <Head>
        <title>
          {profileData
            ? `${profileData?.name} (@${profileData?.username}) / Twitter`
            : 'Profile / Twitter'}
        </title>
      </Head>
      <main className={userProfileStyles.container}>
        <UserProfileSidePanel />
        <div className={userProfileStyles.wrapper}>
          <section className={userProfileStyles.feedWrapper}>
            <UserProfileHeading
              name={profileData?.name as string}
              isVerified={profileData?.isVerified as boolean}
            />
            <UserProfileInfo {...(profileData as UserProfileData)} />
            <UserProfileFilter hasProfileData={profileData ? true : false} />
            {!profileData && <UserProfileNotFound />}
          </section>
          <section className={userProfileStyles.sideWrapper}>
            <UserProfileSearchBar />
            <UserProfileStickyPanel />
          </section>
        </div>
      </main>
    </>
  );
};

export default UserProfile;
