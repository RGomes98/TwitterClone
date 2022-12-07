import userProfileStyles from '../../stylesheets/components/userProfile/userProfileNotFound.module.scss';

export const UserProfileNotFound: React.FC = () => {
  return (
    <section className={userProfileStyles.container}>
      <div className={userProfileStyles.wrapper}>
        <span className={userProfileStyles.heading}>This account doesn’t exist</span>
        <span className={userProfileStyles.text}>Try searching for another.</span>
      </div>
    </section>
  );
};
