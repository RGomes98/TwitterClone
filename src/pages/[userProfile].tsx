import type { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from 'next';
import { UserProfileSearchBar } from '../components/userProfile/userProfileSearchBar';
import { UserProfileSidePanel } from '../components/userProfile/userProfileSidePanel';
import type { userProfileInfoType } from '../components/userProfile/userProfileInfo';
import { UserProfileHeading } from '../components/userProfile/userProfileHeading';
import { UserProfileFilter } from '../components/userProfile/userProfileFilter';
import { UserProfileInfo } from '../components/userProfile/userProfileInfo';
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
  const { data: profileData, isLoading } = trpc.usersRouter.userByUsername.useQuery({
    username: username as string,
  });

  return (
    <>
      <Head>
        <title>
          {profileData ? `${profileData?.name} (@${profileData?.username}) / Twitter` : 'Twitter'}
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
            <UserProfileInfo {...(profileData as userProfileInfoType)} />
            <UserProfileFilter />
          </section>
          <section className={userProfileStyles.sideWrapper}>
            <UserProfileSearchBar />
          </section>
        </div>
      </main>
    </>
  );
};

export default UserProfile;
