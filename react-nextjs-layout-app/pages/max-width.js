import Header from '@/components/Header';
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
          <section
            className={cx(
              'mt-12 mx-auto',
              css`
                position: relative;
                max-width: 1280px;
                width: 100%;
                min-height: 120vh;
              `
            )}
          >
            <div className="sticky top-[3rem] w-full min-h-[3rem] flex justify-between items-center bg-white shadow-md z-10">
              <h2 className="">Section Header</h2>
              <button className="px-6 py-2 bg-blue-500 hover:bg-blue-700 rounded-lg text-white h-[2.5rem]">
                Save
              </button>
            </div>
            <div
              className={cx(
                css`
                  width: 100%;
                  max-width: 100%;
                  min-height: 100vh;
                  display: flex;
                  justify-content: space-between;
                  align-items: flex-start;
                  gap: 1rem;
                  @media (max-width: 1000px) {
                    min-height: initial;
                    flex-direction: column;
                  }
                `
              )}
            >
              <div className="w-full">
                <p>something...</p>
                <p>something...</p>
                <p>something...</p>
                <p>something...</p>
                <p>something...</p>
                <p>something...</p>
                <p>something...</p>
              </div>
              <aside
                className={cx(
                  css`
                    max-width: 24rem;
                    width: 100%;
                    position: sticky;
                    top: 6rem;
                    z-index: 1;
                    min-height: 20rem; // mock attach
                    @media (max-width: 1000px) {
                      max-width: 100%;
                    }
                  `,
                  `border-2`
                )}
              >
                Tracer
              </aside>
            </div>
          </section>
        </article>
      </main>
      <footer
        className={cx(
          `w-full border-2 bg-white flex items-center justify-center min-h-[3rem]`,
          css`
            max-width: 100%;
            width: 100%;
          `
        )}
      >
        Footer
      </footer>
    </div>
  );
}
