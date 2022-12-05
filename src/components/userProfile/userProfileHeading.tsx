import verifiedSVG from '../../../public/images/verified.svg';
import arrowSVG from '../../../public/images/arrow.svg';

import userProfileStyles from '../../stylesheets/components/userProfile/userProfileHeading.module.scss';
import Image from 'next/image';

export const UserProfileHeading: React.FC<{ name: string; isVerified: boolean }> = ({
  name,
  isVerified,
}) => {
  return (
    <section className={userProfileStyles.container}>
      <button className={userProfileStyles.button}>
        <Image className={userProfileStyles.logo} src={arrowSVG} alt='arrow-logo' />
      </button>
      <div className={userProfileStyles.wrapper}>
        <span className={userProfileStyles.text}>
          {name}
          {isVerified && (
            <Image className={userProfileStyles.logo} src={verifiedSVG} alt='verified-logo' />
          )}
        </span>
        <span className={userProfileStyles.text}>ProfileData Tweets</span>
      </div>
    </section>
  );
};
