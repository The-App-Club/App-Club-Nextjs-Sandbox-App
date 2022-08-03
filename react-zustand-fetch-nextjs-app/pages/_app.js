import {css} from '@emotion/css';
import '@fontsource/inter';
import {useCallback, useEffect, useRef, useState} from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Meta from '../components/Meta';
import '../styles/index.scss';
import useDarkMode from 'use-dark-mode';
import {useRouter} from 'next/router';
import {ChakraProvider} from '@chakra-ui/react';
import {extendTheme} from '@chakra-ui/react';

// https://github.com/chakra-ui/chakra-ui/discussions/3457
// https://chakra-ui.com/docs/styled-system/customize-theme
const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {},
      h2: {
        fontSize: '2rem',
      },
      p: {
        fontSize: '1.2rem',
      },
      // styles for the `a`
      a: {
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
});
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
      } else {
        const html = document.documentElement;
        const body = html.querySelector('body');
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
      }
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
          <ChakraProvider theme={theme}>
            <Component
              {...pageProps}
              pageName={router.pathname}
              notifier={navCloseNotifierWhenRouting}
            />
          </ChakraProvider>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default CowboyBebop;
