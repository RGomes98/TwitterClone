import type { UserTweets } from '../../schema/userTweets.schema';
import { timeAgo } from '../../utils/helper/timeAgo';

import verifiedSVG from '../../../public/images/verified.svg';
import Image from 'next/image';
import Link from 'next/link';

import homeStyles from '../../stylesheets/components/home/homeTweet.module.scss';

export const HomeTweet: React.FC<UserTweets> = ({
  author: { image, name, username, isVerified },
  createdAt,
  mediaContent,
  textContent,
}) => {
  return (
    <section className={homeStyles.container}>
      <div className={homeStyles.profilePictureWrapper}>
        <Link href={`/${username}`}>
          {image && (
            <Image
              className={homeStyles.profilePicture}
              width={45}
              height={45}
              src={image as string}
              alt='profile-picture'
            />
          )}
        </Link>
      </div>
      <div className={homeStyles.tweetWrapper}>
        <div className={homeStyles.detailsWrapper}>
          <Link href={`/${username}`}>
            <span className={homeStyles.name}>
              {name}
              {isVerified && (
                <Image className={homeStyles.logo} src={verifiedSVG} alt='verified-logo' />
              )}
            </span>
          </Link>
          <span className={homeStyles.username}>@{username}</span>
          <span className={homeStyles.date}>{timeAgo(createdAt)}</span>
        </div>
        {textContent && <span className={homeStyles.tweet}>{textContent}</span>}
        {mediaContent && (
          <Image
            className={homeStyles.mediaPicture}
            src={mediaContent as string}
            alt='media-picture'
          />
        )}
      </div>
    </section>
  );
};
