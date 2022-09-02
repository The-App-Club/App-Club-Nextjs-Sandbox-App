import {css} from '@emotion/css';
import {useCallback, useEffect, useRef, useState} from 'react';
import {useRouter} from 'next/router';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Meta from '../components/Meta';
import Nav from '../components/Nav';

import '@fontsource/inter';
import '../styles/index.css';
import '../styles/index.scss';
import {RecoilRoot} from 'recoil';

const CowboyBebop = ({Component, pageProps}) => {
  return (
    <RecoilRoot>
      <div className={`relative w-full`}>
        <Meta />
        <Header />
        <main>
          <article>
            <Component {...pageProps} />
          </article>
        </main>
        <Footer />
      </div>
    </RecoilRoot>
  );
};

export default CowboyBebop;
