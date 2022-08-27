import {css} from '@emotion/css';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {RecoilRoot} from 'recoil';
import '../styles/index.css';
import '../styles/index.scss';

const MakeYourSelf = ({Component, pageProps}) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default MakeYourSelf;
