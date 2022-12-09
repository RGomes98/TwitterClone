import spinnerSVG from '../../../public/images/spinner.svg';
import Image from 'next/image';

import loadingStateStyles from '../../stylesheets/components/loadingState/loadingStateSpinner.module.scss';

export const LoadingStateSpinner: React.FC = () => {
  return (
    <section className={loadingStateStyles.container}>
      <Image className={loadingStateStyles.logo} src={spinnerSVG} alt='spinner-logo' />;
    </section>
  );
};
