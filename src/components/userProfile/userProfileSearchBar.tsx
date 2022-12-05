import { filterAtSign } from '../../utils/helper/filterAtSign';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { useRef, useState } from 'react';
import { trpc } from '../../utils/trpc';
import { useRouter } from 'next/router';

import magnifierSVG from '../../../public/images/magnifier.svg';
import verifiedSVG from '../../../public/images/verified.svg';
import closeSVG from '../../../public/images/close.svg';
import Image from 'next/image';

import userProfileStyles from '../../stylesheets/components/userProfile/userProfileSearchBar.module.scss';

export const UserProfileSearchBar: React.FC = () => {
  const [userSearch, setUserSearch] = useState('');

  const { data: usersData, isLoading } = trpc.usersRouter.usersByUsername.useQuery({
    username: filterAtSign(userSearch),
  });

  const searchBarRef = useRef<HTMLInputElement>(null);

  const { isOutside } = useOutsideClick(searchBarRef);

  const { push } = useRouter();

  return (
    <section className={userProfileStyles.container}>
      <Image
        className={
          !isOutside
            ? `${userProfileStyles.magnifierLogo} ${userProfileStyles.magnifierLogoActive}`
            : userProfileStyles.magnifierLogo
        }
        src={magnifierSVG}
        alt='magnifier-logo'
      />
      {userSearch && !isOutside && (
        <button className={userProfileStyles.cancelButton} onClick={() => setUserSearch('')}>
          <Image className={userProfileStyles.cancelLogo} src={closeSVG} alt='close-logo' />
        </button>
      )}
      <input
        className={
          !isOutside
            ? `${userProfileStyles.input} ${userProfileStyles.inputActive}`
            : userProfileStyles.input
        }
        onChange={(e) => setUserSearch(e.target.value)}
        placeholder='Search Twitter'
        ref={searchBarRef}
        value={userSearch}
        type='text'
      />
      {!isOutside && userSearch && (
        <section className={userProfileStyles.wrapper}>
          {isLoading && (
            <div className={userProfileStyles.loadingWrapper}>
              <span className={userProfileStyles.bar}></span>
            </div>
          )}
          {usersData?.map((user) => {
            return (
              <button
                className={userProfileStyles.button}
                key={user.username}
                onClick={() => {
                  setUserSearch('');
                  push(`/${user.username}`);
                }}
              >
                <Image
                  className={userProfileStyles.profilePicture}
                  src={user.image as string}
                  alt='profile-picture'
                  height={70}
                  width={70}
                />
                <div className={userProfileStyles.detailsWrapper}>
                  <span className={userProfileStyles.name}>
                    {user.name}
                    {user.isVerified && (
                      <Image
                        className={userProfileStyles.logo}
                        src={verifiedSVG}
                        alt='verified-logo'
                      />
                    )}
                  </span>
                  <span className={userProfileStyles.username}>@{user.username}</span>
                  <span className={userProfileStyles.message}>{user.message}</span>
                </div>
              </button>
            );
          })}
          {!usersData?.length && (
            <span className={userProfileStyles.text}>
              Search for &quot;{filterAtSign(userSearch)}&quot;
            </span>
          )}
          <span className={userProfileStyles.text}>Go to @{filterAtSign(userSearch)}</span>
        </section>
      )}
      {!isOutside && !userSearch && (
        <section className={userProfileStyles.emptyWrapper}>
          <span className={userProfileStyles.text}>
            Try searching for people, topics, or keywords
          </span>
        </section>
      )}
    </section>
  );
};
