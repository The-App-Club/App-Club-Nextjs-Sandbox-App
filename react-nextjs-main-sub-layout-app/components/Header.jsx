import {css, cx} from '@emotion/css';
const Header = () => {
  return (
    <header
      className={cx(
        css`
          transition: transform 0.4s ease;
          &.is-hidden {
            transform: translateY(-100%);
          }
        `,
        `fixed top-0 min-h-[3rem] w-full border-2 bg-white z-10 flex items-center justify-center shadow-md`
      )}
    >
      Header
    </header>
  );
};

export default Header;
