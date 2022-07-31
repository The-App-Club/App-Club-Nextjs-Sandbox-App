import {css} from '@emotion/css';
import '@fontsource/inter';
import {useCallback, useEffect, useRef, useState} from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Meta from '../components/Meta';
import '../styles/index.scss';
import useDarkMode from 'use-dark-mode';
import {useRouter} from 'next/router';

const CowboyBebop = ({Component, pageProps}) => {
  const router = useRouter();
  const outerContainerDomRef = useRef(null);
  const [tik, setTik] = useState(null);
  const darkMode = useDarkMode(false);

  const navCloseNotifierWhenRouting = useCallback((e) => {
    setTik(new Date());
  }, []);

  useEffect(() => {
    if (router.pathname === `/404`) {
      // 404 page handling
      if (darkMode.value) {
        const html = document.documentElement;
        const body = html.querySelector('body');
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        // darkMode.enable();
      } else {
        const html = document.documentElement;
        const body = html.querySelector('body');
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        // darkMode.disable();
      }
      // if (window.matchMedia(`(prefers-color-scheme: dark)`).matches) {
      //   const html = document.documentElement;
      //   const body = html.querySelector('body');
      //   body.classList.remove('light-mode');
      //   body.classList.add('dark-mode');
      //   // darkMode.enable();
      // }
      // if (window.matchMedia(`(prefers-color-scheme: light)`).matches) {
      //   const html = document.documentElement;
      //   const body = html.querySelector('body');
      //   body.classList.remove('dark-mode');
      //   body.classList.add('light-mode');
      //   // darkMode.disable();
      // }
    }
  }, [darkMode, router]);

  return (
    <div
      ref={outerContainerDomRef}
      id="outer-container"
      className={css`
        position: absolute;
        width: 100%;
        &.nav-active {
          touch-action: none;
          overflow: hidden;
          height: 100%;
        }
      `}
    >
      <Meta />
      <Header
        tik={tik}
        outerContainerDomRef={outerContainerDomRef}
        darkMode={darkMode}
      />
      <main
        className={css`
          background-color: var(--background-color);
          color: var(--font-color);
          a {
            background-color: var(--background-color);
            color: var(--font-color);
          }
        `}
      >
        <article>
          <Component
            {...pageProps}
            pageName={router.pathname}
            notifier={navCloseNotifierWhenRouting}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default CowboyBebop;
