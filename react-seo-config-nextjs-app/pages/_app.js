import {cache, css} from '@emotion/css';
import {CacheProvider} from '@emotion/react';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {RecoilRoot} from 'recoil';
import {useDebouncedCallback} from 'use-debounce';

import SEO from '@/components/SEO';
import {routes} from '@/config/route';

import '@fontsource/inter';
import '@/styles/index.css';
import '@/styles/index.scss';

const getMatchedRoute = ({pathName}) => {
  return routes.find((route) => {
    return route.pathName === pathName;
  });
};

const AppInit = ({children}) => {
  const handleResize = useDebouncedCallback((e) => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, 600);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return <div className={`relative w-full`}>{children}</div>;
};

const renderHeader = ({router}) => {
  const {header} = getMatchedRoute({pathName: router.pathname});
  return header();
};

const renderFooter = ({router}) => {
  const {footer} = getMatchedRoute({pathName: router.pathname});
  return footer();
};

const CowboyBebop = ({Component, pageProps}) => {
  const router = useRouter();
  return (
    <RecoilRoot>
      <CacheProvider value={cache}>
        <AppInit router={router}>
          <SEO />
          {renderHeader({router})}
          <main
            className={css`
              position: relative;
              max-width: 100%;
              width: 100%;
              margin: 0;
              padding: 0;
              display: grid;
              grid-template-rows: 1fr auto;
              grid-template-columns: 100%;
              min-height: 100vh;
            `}
          >
            <article>
              <Component {...pageProps} />
            </article>
          </main>
          {renderFooter({router})}
        </AppInit>
      </CacheProvider>
    </RecoilRoot>
  );
};

export default CowboyBebop;
