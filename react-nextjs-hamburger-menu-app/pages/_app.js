import {css} from '@emotion/css';
import '@fontsource/inter';
import {useCallback, useRef, useState} from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Meta from '../components/Meta';
import '../styles/index.scss';

import {useRouter} from 'next/router';

const CowboyBebop = ({Component, pageProps}) => {
  const router = useRouter();

  const outerContainerDomRef = useRef(null);
  const [tik, setTik] = useState(null);

  const navCloseNotifierWhenRouting = useCallback((e) => {
    setTik(new Date());
  }, []);

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
      <Header tik={tik} outerContainerDomRef={outerContainerDomRef} />
      <main className={css``}>
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
