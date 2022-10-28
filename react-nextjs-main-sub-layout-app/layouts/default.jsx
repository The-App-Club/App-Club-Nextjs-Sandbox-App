import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {css} from '@emotion/css';
import FadeIn from './fadeIn';

const Layout = ({children}) => {
  return (
    <div>
      <Header />
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
        <article className="w-full overflow-hidden">{children}</article>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
