import {css} from '@emotion/css';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import ThemeToggle from './ThemeToggle';
import {default as Nav} from './Nav';

const Header = ({tik, outerContainerDomRef, darkMode}) => {
  const router = useRouter();
  return (
    <header
      className={css`
        z-index: 1;
        position: sticky;
        top: 0;
        width: 100%;
        background-color: var(--background-color);
        color: var(--font-color);
      `}
    >
      <div
        className={css`
          position: relative;
          width: 100%;
        `}
      >
        <div
          className={css`
            position: absolute;
            left: 0;
            z-index: 1;
            display: flex;
            align-items: center;
            gap: 1rem;
            @media (max-width: 768px) {
              gap: 0.5rem;
            }
            :hover {
              cursor: pointer;
            }
          `}
          onClick={(e) => {
            router.push('/');
          }}
        >
          <Image src="/assets/logo.png" alt="logo" width={48} height={48} />
          <h2
            className={css`
              font-size: 1.25rem;
              @media (max-width: 768px) {
                font-size: 0.85rem;
              }
            `}
          >
            Cowboy Bebop Nights
          </h2>
        </div>
      </div>
      <Nav
        tik={tik}
        isRight={true}
        darkMode={darkMode}
        outerContainerDomRef={outerContainerDomRef}
      />
      <div
        className={css`
          position: absolute;
          top: 4px;
          right: 8px;
          z-index: 1;
          @media (max-width: 768px) {
            top: 8px;
            right: 50px;
          }
        `}
      >
        <ThemeToggle darkMode={darkMode} />
      </div>
    </header>
  );
};

export default Header;
