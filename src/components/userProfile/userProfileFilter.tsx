import { useHorizontalScroll } from '../../hooks/useHorizontalScroll';
import { useSession } from 'next-auth/react';
import { useRef, useState } from 'react';

import arrowSVG from '../../../public/images/arrow.svg';
import Image from 'next/image';

import userProfileStyles from '../../stylesheets/components/userProfile/userProfileFilter.module.scss';

export const UserProfileFilter: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState(0);

  const containerRef = useRef<HTMLElement>(null);

  const { data: sessionData } = useSession();

  const { isScrollAtStart, isWindowSizeSmallEnough, handleScrollToStart, handleScrollToEnd } =
    useHorizontalScroll(containerRef);

  return (
    <section className={userProfileStyles.container} ref={containerRef}>
      {isWindowSizeSmallEnough && (
        <div className={userProfileStyles.wrapper}>
          <button
            className={
              isScrollAtStart
                ? `${userProfileStyles.button} ${userProfileStyles.hiddenButton}`
                : userProfileStyles.button
            }
            onClick={handleScrollToEnd}
          >
            <Image className={userProfileStyles.logo} src={arrowSVG} alt='arrow-logo' />
          </button>
          <button
            className={
              !isScrollAtStart
                ? `${userProfileStyles.button} ${userProfileStyles.hiddenButton}`
                : userProfileStyles.button
            }
            onClick={handleScrollToStart}
          >
            <Image className={userProfileStyles.logo} src={arrowSVG} alt='arrow-logo' />
          </button>
        </div>
      )}
      <button
        className={
          selectedFilter === 0
            ? `${userProfileStyles.filterButton} ${userProfileStyles.selectedFilter}`
            : userProfileStyles.filterButton
        }
        onClick={() => setSelectedFilter(0)}
      >
        Tweets
        {selectedFilter === 0 && <span className={userProfileStyles.bar}></span>}
      </button>
      <button
        className={
          selectedFilter === 1
            ? `${userProfileStyles.filterButton} ${userProfileStyles.selectedFilter}`
            : userProfileStyles.filterButton
        }
        onClick={() => setSelectedFilter(1)}
      >
        Tweets & replies
        {selectedFilter === 1 && <span className={userProfileStyles.bar}></span>}
      </button>
      <button
        className={
          selectedFilter === 2
            ? `${userProfileStyles.filterButton} ${userProfileStyles.selectedFilter}`
            : userProfileStyles.filterButton
        }
        onClick={() => (sessionData ? setSelectedFilter(2) : null)}
      >
        Media
        {selectedFilter === 2 && <span className={userProfileStyles.bar}></span>}
      </button>
      <button
        className={
          selectedFilter === 3
            ? `${userProfileStyles.filterButton} ${userProfileStyles.selectedFilter}`
            : userProfileStyles.filterButton
        }
        onClick={() => (sessionData ? setSelectedFilter(3) : null)}
      >
        Likes
        {selectedFilter === 3 && <span className={userProfileStyles.bar}></span>}
      </button>
    </section>
  );
};
