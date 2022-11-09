import '@/styles/index.css';
import '@/styles/index.scss';
import {CssVarsProvider} from '@mui/joy/styles';
import {customTheme} from '@/config/theme';
import {RecoilRoot} from 'recoil';

const MyApp = ({Component, pageProps}) => {
  return (
    <RecoilRoot>
      <CssVarsProvider theme={customTheme}>
        <Component {...pageProps} />
      </CssVarsProvider>
    </RecoilRoot>
  );
};

export default MyApp;
