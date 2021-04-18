import s from './Footer.module.scss';

const Footer = () => (
  <footer>
    <div className={s.developerContacts}>
      <p className={s.text}>
        Developed by
        <span className={s.developerName}> Halyna Pryn</span>
      </p>
      <a
        href="mailto:prynhalyna@gmail.com"
        target="blank"
        aria-label="Link to email"
        className={s.developerLink}
      >
        {/* <EmailOutlinedIcon htmlColor="green" fontSize="meddium" /> */}
        {/* <EmailIcon className={s.icon} /> */}
      </a>
      <a
        href="https://www.linkedin.com/in/nataliia-lazorenko-6a5b22152/"
        target="_blank"
        aria-label="Link to LinkedIn"
        rel="noreferrer"
        className={s.developerLink}
      >
        {/* <LinkedInIcon htmlColor="green" fontSize="meddium" /> */}
        {/* <LinkedInIcon className={s.icon} /> */}
      </a>
      <a
        href="https://github.com/Halyna30"
        target="_blank"
        aria-label="Link to GitHub"
        rel="noreferrer"
        className={s.developerLink}
      >
        {/* <GitHubIcon htmlColor="green" fontSize="meddium" />
        <GitHubIcon className={s.icon} /> */}
      </a>
    </div>
  </footer>
);

export default Footer;
