import Container from '@/components/Container';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SectionHeader from '@/components/SectionHeader';
import Sidebar from '@/components/Sidebar';
import {css, cx} from '@emotion/css';

export default function Home() {
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
        <article className="w-full">
          <Sidebar />
          <section
            className={cx(
              'mt-12',
              css`
                position: relative;
                top: 0;
                left: 320px;
                max-width: calc(100% - 320px);
                width: 100%;
                min-height: 120vh;
              `
            )}
          >
            <SectionHeader />
            <Container />
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
