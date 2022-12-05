import { signIn } from 'next-auth/react';

import twitterSVG from '../../../public/images/twitter.svg';
import discordSVG from '../../../public/images/discord.svg';
import googleSVG from '../../../public/images/google.svg';
import githubSVG from '../../../public/images/github.svg';
import twitchSVG from '../../../public/images/twitch.svg';
import Image from 'next/image';

import signInStyles from '../../stylesheets/components/signIn/signInButtons.module.scss';

export const SignInButtons: React.FC<{ inOrUp: string }> = ({ inOrUp }) => {
  return (
    <section className={signInStyles.container}>
      <button className={signInStyles.button} onClick={() => signIn('google')}>
        <Image className={signInStyles.logo} src={googleSVG} alt='google-logo' />
        Sign {inOrUp} with Google
      </button>
      <button className={signInStyles.button} onClick={() => signIn('twitter')}>
        <Image className={signInStyles.logo} src={twitterSVG} alt='twitter-logo' />
        Sign {inOrUp} with Twitter
      </button>
      <button className={signInStyles.button} onClick={() => signIn('github')}>
        <Image className={signInStyles.logo} src={githubSVG} alt='github-logo' />
        Sign {inOrUp} with Github
      </button>
      <button className={signInStyles.button} onClick={() => signIn('discord')}>
        <Image className={signInStyles.logo} src={discordSVG} alt='discord-logo' />
        Sign {inOrUp} with Discord
      </button>
      <button className={signInStyles.button} onClick={() => signIn('twitch')}>
        <Image className={signInStyles.logo} src={twitchSVG} alt='twitch-logo' />
        Sign {inOrUp} with Twitch
      </button>
      <p className={signInStyles.text}>
        By signing {inOrUp}, you agree to the{' '}
        <a className={signInStyles.link} href='#'>
          Terms of Service{' '}
        </a>
        and{' '}
        <a className={signInStyles.link} href='#'>
          Privacy Policy
        </a>
        , including{' '}
        <a className={signInStyles.link} href='#'>
          Cookie Use.
        </a>
      </p>
    </section>
  );
};
