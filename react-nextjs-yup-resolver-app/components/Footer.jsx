import {css, cx} from '@emotion/css';

const Footer = () => {
  return (
    <footer
      className={cx(
        `w-full border-2 bg-white flex items-center justify-center min-h-[3rem]`,
        css`
          position: absolute;
          left: 320px;
          max-width: calc(100% - 320px);
          width: 100%;
        `
      )}
    >
      Footer
    </footer>
  );
};

export default Footer;
