import { useOutsideClick } from '../../hooks/useOutsideClick';
import { useRef } from 'react';

import threeDots from '../../../public/images/threeDots.svg';
import Image from 'next/image';

import userProfileStyles from '../../stylesheets/components/userProfile/userProfilePolicies.module.scss';

export const UserProfilePolicies: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const containerRef = useRef<HTMLDivElement>(null);

  const { isOutside } = useOutsideClick(containerRef);

  return (
    <section className={userProfileStyles.container}>
      <a className={userProfileStyles.link} href='#'>
        Terms of Service
      </a>
      <a className={userProfileStyles.link} href='#'>
        Privacy Policy
      </a>
      <a className={userProfileStyles.link} href='#'>
        Cookie Policy
      </a>
      <a className={userProfileStyles.link} href='#'>
        Accessibility
      </a>
      <a className={userProfileStyles.link} href='#'>
        Ads info
      </a>
      <div className={userProfileStyles.wrapper} ref={containerRef}>
        <a className={userProfileStyles.link} href='#'>
          More
        </a>
        <Image className={userProfileStyles.logo} src={threeDots} alt='threeDots-logo' />
        {!isOutside && (
          <div className={userProfileStyles.hiddenWrapper}>
            <a className={userProfileStyles.link} href='#'>
              About
            </a>
            <a className={userProfileStyles.link} href='#'>
              Status
            </a>
            <a className={userProfileStyles.link} href='#'>
              Twitter for Business
            </a>
            <a className={userProfileStyles.link} href='#'>
              Developers
            </a>
          </div>
        )}
      </div>
      <span className={userProfileStyles.text}>© {currentYear} Twitter Clone, Inc.</span>
    </section>
  );
};
