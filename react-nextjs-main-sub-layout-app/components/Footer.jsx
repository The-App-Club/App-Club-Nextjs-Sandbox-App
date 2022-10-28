import {css, cx} from '@emotion/css';

const Footer = () => {
  return (
    <footer
      className={cx(
        `w-full border-t-2 bg-white flex items-center justify-center min-h-[3rem]`,
        css`
          position: absolute;
          left: 320px;
          max-width: calc(100% - 320px);
          width: 100%;
          transition: left 0.4s ease 200ms, max-width 0.4s ease 200ms;
          @media (max-width: 768px) {
            left: 0;
            max-width: 100%;
          }
        `
      )}
    >
      Footer
    </footer>
  );
};

export default Footer;
