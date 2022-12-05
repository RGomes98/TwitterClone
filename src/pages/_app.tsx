import { SessionProvider } from 'next-auth/react';
import { type Session } from 'next-auth';
import { type AppType } from 'next/app';
import { trpc } from '../utils/trpc';

import Head from 'next/head';

import '../stylesheets/global.scss';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <Head>
        <title>Twitter. It’s what’s happening / Twitter</title>
        <meta
          name='description'
          content='From breaking news and entertainment to sports and politics, get the full story with all the live commentary.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
};

export default trpc.withTRPC(MyApp);
