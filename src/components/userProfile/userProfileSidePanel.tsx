import { UserProfileLogOut } from './userProfileLogOut';
import { useSession } from 'next-auth/react';

import threeDotsCircledSVG from '../../../public/images/threeDotsCircled.svg';
import twitterSVG from '../../../public/images/twitter.svg';
import hashtagSVG from '../../../public/images/hashtag.svg';
import messageSVG from '../../../public/images/message.svg';
import featherSVG from '../../../public/images/feather.svg';
import ribbonSVG from '../../../public/images/ribbon.svg';
import personSVG from '../../../public/images/person.svg';
import gearSVG from '../../../public/images/gear.svg';
import homeSVG from '../../../public/images/home.svg';
import listSVG from '../../../public/images/list.svg';
import bellSVG from '../../../public/images/bell.svg';
import Image from 'next/image';

import userProfileStyles from '../../stylesheets/components/userProfile/userProfileSidePanel.module.scss';

export const UserProfileSidePanel: React.FC = () => {
  const { data: session } = useSession();

  return (
    <section className={userProfileStyles.container}>
      <nav className={userProfileStyles.navMenu}>
        <div className={userProfileStyles.navItem}>
          <button className={userProfileStyles.button}>
            <Image className={userProfileStyles.logo} src={twitterSVG} alt='twitter-logo' />
          </button>
        </div>
        {session && (
          <div className={userProfileStyles.navItem}>
            <button className={userProfileStyles.button}>
              <Image className={userProfileStyles.logo} src={homeSVG} alt='home-logo' />
              <span className={userProfileStyles.text}>Home</span>
            </button>
          </div>
        )}
        <div className={userProfileStyles.navItem}>
          <button className={userProfileStyles.button}>
            <Image className={userProfileStyles.logo} src={hashtagSVG} alt='explore-logo' />
            <span className={userProfileStyles.text}>Explore</span>
          </button>
        </div>
        {session && (
          <div className={userProfileStyles.navItem}>
            <button className={userProfileStyles.button}>
              <Image className={userProfileStyles.logo} src={bellSVG} alt='notifications-logo' />
              <span className={userProfileStyles.text}>Notifications</span>
            </button>
          </div>
        )}
        {session && (
          <div className={userProfileStyles.navItem}>
            <button className={userProfileStyles.button}>
              <Image className={userProfileStyles.logo} src={messageSVG} alt='messages-logo' />
              <span className={userProfileStyles.text}>Messages</span>
            </button>
          </div>
        )}
        {session && (
          <div className={userProfileStyles.navItem}>
            <button className={userProfileStyles.button}>
              <Image className={userProfileStyles.logo} src={ribbonSVG} alt='bookmarks-logo' />
              <span className={userProfileStyles.text}>Bookmarks</span>
            </button>
          </div>
        )}
        {session && (
          <div className={userProfileStyles.navItem}>
            <button className={userProfileStyles.button}>
              <Image className={userProfileStyles.logo} src={listSVG} alt='lists-logo' />
              <span className={userProfileStyles.text}>Lists</span>
            </button>
          </div>
        )}
        {session && (
          <div className={userProfileStyles.navItem}>
            <button className={userProfileStyles.button}>
              <Image className={userProfileStyles.logo} src={personSVG} alt='profile-logo' />
              <span className={userProfileStyles.text}>Profile</span>
            </button>
          </div>
        )}
        {session ? (
          <div className={userProfileStyles.navItem}>
            <button className={userProfileStyles.button}>
              <Image className={userProfileStyles.logo} src={threeDotsCircledSVG} alt='more-logo' />
              <span className={userProfileStyles.text}>More</span>
            </button>
          </div>
        ) : (
          <div className={userProfileStyles.navItem}>
            <button className={userProfileStyles.button}>
              <Image className={userProfileStyles.logo} src={gearSVG} alt='gear-logo' />
              <span className={userProfileStyles.text}>Settings</span>
            </button>
          </div>
        )}
        {session && (
          <div className={userProfileStyles.navItem}>
            <button className={userProfileStyles.button}>
              <Image className={userProfileStyles.logo} src={featherSVG} alt='tweet-logo' />
              <span className={userProfileStyles.text}>Tweet</span>
            </button>
          </div>
        )}
        {session && <UserProfileLogOut />}
      </nav>
    </section>
  );
};
