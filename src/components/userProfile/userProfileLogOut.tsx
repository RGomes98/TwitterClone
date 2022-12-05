import { signOut, useSession } from 'next-auth/react';
import { trpc } from '../../utils/trpc';
import { useState } from 'react';

import threeDotsSVG from '../../../public/images/threeDots.svg';
import logOutSVG from '../../../public/images/logOut.svg';
import Image from 'next/image';

import userProfileStyles from '../../stylesheets/components/userProfile/userProfileLogOut.module.scss';

export const UserProfileLogOut: React.FC = () => {
  const { data: session } = useSession();

  const { data: sessionData, isLoading } = trpc.usersRouter.userById.useQuery({
    userId: session?.user?.id as string,
  });

  const [isLogOutOpen, setIsLogOutOpen] = useState(false);

  return (
    <div className={userProfileStyles.container}>
      <section className={userProfileStyles.logOutWrapper}>
        <button
          className={
            isLogOutOpen
              ? `${userProfileStyles.button} ${userProfileStyles.logOutOpen}`
              : `${userProfileStyles.button}`
          }
          onClick={() => signOut()}
        >
          <Image className={userProfileStyles.logo} src={logOutSVG} alt='logOut-logo' />
          <span className={userProfileStyles.text}>Log out @{sessionData?.username}</span>
        </button>
      </section>
      <button
        className={
          isLogOutOpen
            ? `${userProfileStyles.userInfoWrapper} ${userProfileStyles.userInfoOpen}`
            : `${userProfileStyles.userInfoWrapper}`
        }
        onClick={() => setIsLogOutOpen((prev) => !prev)}
      >
        {sessionData && (
          <Image
            className={userProfileStyles.profilePicture}
            width={45}
            height={45}
            src={sessionData?.image as string}
            alt='profile-picture'
          />
        )}
        <section className={userProfileStyles.wrapper}>
          <span className={userProfileStyles.text}>{sessionData?.name}</span>
          <span className={userProfileStyles.text}>@{sessionData?.username}</span>
        </section>
        <Image
          className={
            isLogOutOpen
              ? `${userProfileStyles.logo} ${userProfileStyles.logoRotate}`
              : `${userProfileStyles.logo}`
          }
          src={threeDotsSVG}
          alt='logOutMenu-logo'
        />
      </button>
    </div>
  );
};
