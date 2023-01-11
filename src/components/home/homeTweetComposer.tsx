import { useTextAreaResizer } from '../../hooks/useTextAreaResizer';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { HomeTweetCounter } from './homeTweetCounter';
import { useSession } from 'next-auth/react';
import { useRef, useState } from 'react';
import { trpc } from '../../utils/trpc';

import scheduleSVG from '../../../public/images/schedule.svg';
import locationSVG from '../../../public/images/location.svg';
import emojiSVG from '../../../public/images/emoji.svg';
import starsSVG from '../../../public/images/stars.svg';
import mediaSVG from '../../../public/images/media.svg';
import pollSVG from '../../../public/images/poll.svg';
import gifSVG from '../../../public/images/gif.svg';
import addSVG from '../../../public/images/add.svg';
import Image from 'next/image';

import homeStyles from '../../stylesheets/components/home/homeTweetComposer.module.scss';

export const HomeTweetComposer: React.FC = () => {
  const [tweetValue, setTweetValue] = useState('');

  const { data: session } = useSession();

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const { isOutside } = useOutsideClick(textAreaRef);

  useTextAreaResizer(textAreaRef);

  const TWEET_LENGTH_LIMIT = tweetValue.length >= 280;

  const { mutate, isLoading } = trpc.tweetRouter.createTweet.useMutation();

  const handleCreateTweet = () => {
    mutate(
      { textContent: tweetValue },
      {
        onSuccess: () => {
          setTweetValue('');
        },
      }
    );
  };

  return (
    <section className={homeStyles.container}>
      <div className={homeStyles.headingWrapper}>
        <span className={homeStyles.heading}>Home</span>
        <button className={homeStyles.button}>
          <Image className={homeStyles.logo} src={starsSVG} alt='stars-logo' />
        </button>
      </div>
      <div className={homeStyles.loadingBarWrapper}>
        {isLoading && <span className={homeStyles.loadingBar}></span>}
      </div>
      <div className={homeStyles.wrapper}>
        {session && (
          <Image
            className={homeStyles.profilePicture}
            src={session?.user?.image as string}
            height={48}
            width={48}
            alt='profile-picture'
          />
        )}
        <section className={homeStyles.tweetWrapper}>
          <textarea
            className={`
            ${tweetValue.length && homeStyles.inputScroll}
            ${TWEET_LENGTH_LIMIT && homeStyles.inputDisabled}
            ${isOutside ? homeStyles.input : `${homeStyles.input} ${homeStyles.inputBorder}`}
            `}
            onChange={(e) => setTweetValue(e.target.value)}
            placeholder='What’s happening?'
            value={tweetValue}
            ref={textAreaRef}
            rows={1}
          ></textarea>
          <section className={homeStyles.buttonSection}>
            <div className={homeStyles.buttonWrapper}>
              <button className={homeStyles.button}>
                <Image className={homeStyles.logo} src={mediaSVG} alt='media-logo' />
              </button>
              <button className={homeStyles.button}>
                <Image className={homeStyles.logo} src={gifSVG} alt='gif-logo' />
              </button>
              <button className={homeStyles.button}>
                <Image className={homeStyles.logo} src={pollSVG} alt='poll-logo' />
              </button>
              <button className={homeStyles.button}>
                <Image className={homeStyles.logo} src={emojiSVG} alt='emoji-logo' />
              </button>
              <button className={homeStyles.button}>
                <Image className={homeStyles.logo} src={scheduleSVG} alt='schedule-logo' />
              </button>
              <button className={homeStyles.button}>
                <Image className={homeStyles.logo} src={locationSVG} alt='location-logo' />
              </button>
            </div>
            <div className={homeStyles.counterWrapper}>
              {!!tweetValue?.length && (
                <div className={homeStyles.counterDetails}>
                  <HomeTweetCounter tweetLength={tweetValue?.length} />
                  <span className={homeStyles.counterBar}></span>
                  <button className={homeStyles.addButton}>
                    <Image className={homeStyles.logo} src={addSVG} alt='add-logo' />
                  </button>
                </div>
              )}
              <button
                onClick={handleCreateTweet}
                className={
                  !tweetValue.length || TWEET_LENGTH_LIMIT
                    ? `${homeStyles.tweetButton} ${homeStyles.tweetButtonDisabled}`
                    : homeStyles.tweetButton
                }
              >
                Tweet
              </button>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
};
