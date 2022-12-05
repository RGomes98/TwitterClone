import type { Dispatch, SetStateAction } from 'react';
import { SignInButtons } from './signInButtons';

import twitterSVG from '../../../public/images/twitter.svg';
import closeSVG from '../../../public/images/close.svg';
import Image from 'next/image';

import signInStyles from '../../stylesheets/components/signIn/signInModal.module.scss';

export const SignInModal: React.FC<{ setModalState: Dispatch<SetStateAction<boolean>> }> = ({
  setModalState,
}) => {
  return (
    <section className={signInStyles.container}>
      <button className={signInStyles.button} onClick={() => setModalState(false)}>
        <Image className={signInStyles.closeSVG} src={closeSVG} alt='close-button' />
      </button>
      <Image className={signInStyles.logo} src={twitterSVG} alt='twitter-logo' />
      <span className={signInStyles.heading}>Sign in to Twitter</span>
      <SignInButtons inOrUp={'in'} />
    </section>
  );
};
