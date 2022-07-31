import {css} from '@emotion/css';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import ThemeToggle from './ThemeToggle';
import {Nav} from './Nav';

const Header = ({tik, outerContainerDomRef}) => {
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
        /* background: wheat; */
        /* &::before {
          content: ' ';
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          opacity: 0.7;
          background: #fff;
          filter: blur(10px);
        } */
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
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
