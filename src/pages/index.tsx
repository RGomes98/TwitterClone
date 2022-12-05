import { LoadingStateLogo } from '../components/loadingState/loadingStateLogo';
import { SignInButtons } from '../components/signIn/signInButtons';
import { SignInFooter } from '../components/signIn/signInFooter';
import { SignInModal } from '../components/signIn/signInModal';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { type NextPage } from 'next';

import twitterSVG from '../../public/images/twitter.svg';
import Image from 'next/image';

import signInStyles from '../stylesheets/pages/signIn.module.scss';

const SignIn: NextPage = () => {
  const { data: session, status: sessionStatus } = useSession();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { push } = useRouter();

  useEffect(() => {
    if (sessionStatus !== 'loading' && session) push('/home');
  }, [session, sessionStatus, push]);

  if (sessionStatus === 'loading') return <LoadingStateLogo />;

  return (
    <main className={signInStyles.container}>
      {isModalOpen && <SignInModal setModalState={setIsModalOpen} />}
      <div className={signInStyles.wrapper}>
        <section className={signInStyles.logoSection}>
          <Image className={signInStyles.logoBig} src={twitterSVG} alt='twitter-logo' />
        </section>
        <section className={signInStyles.signUpSection}>
          <Image className={signInStyles.logoSmall} src={twitterSVG} alt='twitter-logo' />
          <h1 className={signInStyles.mainHeading}>Happening now</h1>
          <span className={signInStyles.minorHeading}>Join Twitter today.</span>
          <SignInButtons inOrUp={'up'} />
          <span className={signInStyles.text}>Already have an account?</span>
          <button className={signInStyles.button} onClick={() => setIsModalOpen(true)}>
            Sign in
          </button>
        </section>
      </div>
      <SignInFooter />
    </main>
  );
};

export default SignIn;
