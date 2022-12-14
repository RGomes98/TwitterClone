import { filterAtSign } from '../../utils/helper/filterAtSign';
import { useRouter } from 'next/router';

import verifiedSVG from '../../../public/images/verified.svg';
import locationSVG from '../../../public/images/location.svg';
import calendarSVG from '../../../public/images/calendar.svg';
import balloonSVG from '../../../public/images/balloon.svg';
import Image from 'next/image';

import userProfileStyles from '../../stylesheets/components/userProfile/userProfileInfo.module.scss';

export type UserProfileData = {
  backgroundImage: string;
  isVerified: boolean;
  residesAt: string;
  username: string;
  message: string;
  createdAt: Date;
  birthday: Date;
  image: string;
  name: string;
};

export const UserProfileInfo: React.FC<UserProfileData> = ({
  backgroundImage,
  isVerified,
  residesAt,
  username,
  createdAt,
  birthday,
  message,
  image,
  name,
}) => {
  const { query: notFoundUserParams } = useRouter();

  return (
    <section className={userProfileStyles.container}>
      <button className={userProfileStyles.backgroundButton}>
        {backgroundImage && (
          <Image
            className={userProfileStyles.profileBackground}
            fill={true}
            src={backgroundImage}
            alt='profile-background'
          />
        )}
      </button>
      <div className={userProfileStyles.wrapper}>
        <section className={userProfileStyles.profileImageWrapper}>
          <button className={userProfileStyles.profileImageButton}>
            {image && (
              <Image
                className={userProfileStyles.profileImage}
                fill={true}
                src={image}
                alt='profile-image'
              />
            )}
          </button>
          {username && <button className={userProfileStyles.button}>Follow</button>}
        </section>
        <span className={userProfileStyles.name}>
          {name}
          {isVerified && (
            <button className={userProfileStyles.button}>
              <Image className={userProfileStyles.logo} src={verifiedSVG} alt='verified-logo' />
            </button>
          )}
        </span>
        <span
          className={
            username
              ? userProfileStyles.username
              : `${userProfileStyles.notFoundUser} ${userProfileStyles.username}`
          }
        >
          @
          {username
            ? filterAtSign(username)
            : filterAtSign(notFoundUserParams.userProfile as string)}
        </span>
        <span className={userProfileStyles.message}>{message}</span>
        {username && (
          <section className={userProfileStyles.profileDetailsWrapper}>
            <div className={userProfileStyles.detail}>
              <Image className={userProfileStyles.logo} src={locationSVG} alt='location-logo' />
              <span className={userProfileStyles.text}>{residesAt}</span>
            </div>
            <div className={userProfileStyles.detail}>
              <Image className={userProfileStyles.logo} src={balloonSVG} alt='balloon-logo' />
              <span className={userProfileStyles.text}>
                Born{' '}
                {birthday?.toLocaleString('en-US', {
                  year: 'numeric',
                  day: 'numeric',
                  month: 'long',
                })}
              </span>
            </div>
            <div className={userProfileStyles.detail}>
              <Image className={userProfileStyles.logo} src={calendarSVG} alt='calendar-logo' />
              <span className={userProfileStyles.text}>
                Joined{' '}
                {createdAt?.toLocaleString('en-US', {
                  year: 'numeric',
                  month: 'long',
                })}
              </span>
            </div>
          </section>
        )}
        {username && (
          <section className={userProfileStyles.profileFollowersWrapper}>
            <span className={userProfileStyles.wrapper}>
              number <span className={userProfileStyles.text}>Following</span>
            </span>
            <span className={userProfileStyles.wrapper}>
              number <span className={userProfileStyles.text}>Followers</span>
            </span>
          </section>
        )}
      </div>
    </section>
  );
};
