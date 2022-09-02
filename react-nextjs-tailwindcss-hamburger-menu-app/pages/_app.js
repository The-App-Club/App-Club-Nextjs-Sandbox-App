import {css} from '@emotion/css';
import {useCallback, useEffect, useRef, useState} from 'react';
import {useRouter} from 'next/router';
import {RecoilRoot, useRecoilValue} from 'recoil';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Meta from '../components/Meta';
import Nav from '../components/Nav';

import themeState from '../stores/themeStore';

import '@fontsource/inter';
import '../styles/index.css';
import '../styles/index.scss';

const CowboyBebopInit = ({children, setOpened}) => {
  const {mode} = useRecoilValue(themeState);
  const router = useRouter();

  const handleRouteChangeStart = useCallback(
    (e) => {
      setOpened(false);
    },
    [setOpened]
  );

  useEffect(() => {
    if (router.pathname === `/404`) {
      // 404 page handling
      if (mode === `dark`) {
        const html = document.documentElement;
        html.classList.remove('light');
        html.classList.add('dark');
      } else {
        const html = document.documentElement;
        html.classList.remove('dark');
        html.classList.add('light');
      }
    }

    router.events.on('routeChangeStart', handleRouteChangeStart);
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
    };
  }, [mode, router, handleRouteChangeStart]);

  return <div className={`relative w-full`}>{children}</div>;
};

const CowboyBebop = ({Component, pageProps}) => {
  const [isTrigger, setIsTrigger] = useState(false);
  const [opened, setOpened] = useState(false);

  const doAutoCloseSideBar = useCallback((e) => {
    setOpened(false);
  }, []);

  const handleClick = useCallback((e) => {
    setOpened((opened) => {
      return !opened;
    });
    setIsTrigger(true);
  }, []);

  return (
    <RecoilRoot>
      <CowboyBebopInit setOpened={setOpened}>
        <Meta />
        <Nav
          isTrigger={isTrigger}
          handleClick={handleClick}
          opened={opened}
          setIsTrigger={setIsTrigger}
          setOpened={setOpened}
        />
        <Header opened={opened} handleClick={handleClick} />
        <main>
          <article>
            <Component {...pageProps} notifier={doAutoCloseSideBar} />
          </article>
        </main>
        <Footer />
      </CowboyBebopInit>
    </RecoilRoot>
  );
};

export default CowboyBebop;
