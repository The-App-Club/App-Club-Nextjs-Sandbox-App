import {css, cx} from '@emotion/css';
import {motion} from 'framer-motion';
import {useRouter} from 'next/router';

import Hamburger from '@/components/Hamburger';
import ThemeToggle from '@/components/ThemeToggle';

const Header = () => {
  const router = useRouter();
  return (
    <motion.header
      className={cx(
        `fixed top-0 min-h-[3rem] w-full border-2 bg-white z-20 flex items-center justify-center shadow-md`,
        css`
          position: fixed;
          top: 0;
          z-index: 4;
        `
      )}
    >
      <div className="relative w-full flex items-center gap-2">
        <Hamburger
          className={css`
            display: none;
            opacity: 0;
            @media (max-width: 768px) {
              display: block;
              opacity: 1;
            }
          `}
        />
        <div className="absolute right-2 flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
