import signInStyles from '../../stylesheets/components/signIn/signInFooter.module.scss';

export const SignInFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={signInStyles.container}>
      <nav className={signInStyles.wrapper}>
        <a className={signInStyles.link} href='#'>
          About
        </a>
        <a className={signInStyles.link} href='#'>
          Help Center
        </a>
        <a className={signInStyles.link} href='#'>
          Terms of Service
        </a>
        <a className={signInStyles.link} href='#'>
          Privacy Policy
        </a>
        <a className={signInStyles.link} href='#'>
          Cookie Policy
        </a>
        <a className={signInStyles.link} href='#'>
          Accessibility
        </a>
        <a className={signInStyles.link} href='#'>
          Ads info
        </a>
        <a className={signInStyles.link} href='#'>
          Blog
        </a>
        <a className={signInStyles.link} href='#'>
          Status
        </a>
        <a className={signInStyles.link} href='#'>
          Careers
        </a>
        <a className={signInStyles.link} href='#'>
          Brand Resources
        </a>
        <a className={signInStyles.link} href='#'>
          Advertising
        </a>
        <a className={signInStyles.link} href='#'>
          Marketing
        </a>
        <a className={signInStyles.link} href='#'>
          Twitter for Business
        </a>
        <a className={signInStyles.link} href='#'>
          Developers
        </a>
        <a className={signInStyles.link} href='#'>
          Directory
        </a>
        <a className={signInStyles.link} href='#'>
          Settings
        </a>
        <a className={signInStyles.link} href='#'>
          &#169; {currentYear} Twitter Clone, inc.
        </a>
      </nav>
    </footer>
  );
};
