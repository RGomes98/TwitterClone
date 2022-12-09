import { useSession } from 'next-auth/react';
import UserProfile from './[userProfile]';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { useEffect } from 'react';

import Head from 'next/head';

const Home: NextPage = () => {
  const { data: session, status: sessionStatus } = useSession();

  const { push } = useRouter();

  useEffect(() => {
    if (sessionStatus !== 'loading' && !session) push('/');
  }, [push, session, sessionStatus]);

  return (
    <>
      <Head>
        <title>Home / Twitter</title>
      </Head>
      <UserProfile />
    </>
  );
};

export default Home;
