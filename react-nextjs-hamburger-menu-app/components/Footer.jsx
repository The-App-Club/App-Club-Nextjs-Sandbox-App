import {css} from '@emotion/css';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer
      className={css`
        display: flex;
        padding: 2rem 0;
        border-top: 1px solid #eaeaea;
        justify-content: center;
        align-items: center;
        background-color: var(--background-color);
        color: var(--font-color);
        a {
          background-color: var(--background-color);
          color: var(--font-color);
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}
    >
      <a href="https://example.com/" target="_blank" rel="noopener noreferrer">
        <span className={css``}>Powered by </span>
        <Image src="/assets/logo.png" alt="logo" width={72} height={72} />
      </a>
    </footer>
  );
};

export default Footer;
