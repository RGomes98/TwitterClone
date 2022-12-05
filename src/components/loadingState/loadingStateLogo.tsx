import twitterSVG from '../../../public/images/twitter.svg';
import Image from 'next/image';

import loadingStateStyles from '../../stylesheets/components/loadingState/loadingStateLogo.module.scss';

export const LoadingStateLogo: React.FC = () => {
  return (
    <div className={loadingStateStyles.container}>
      <Image className={loadingStateStyles.logo} src={twitterSVG} alt='twitter-logo' />
    </div>
  );
};
