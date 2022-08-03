import {css} from '@emotion/css';
import Link from 'next/link';
import Layout from '../layouts/default';
const Custom404 = ({pageName, notifier}) => {
  return (
    <Layout pageName={pageName} notifier={notifier}>
      <section
        className={css`
          max-width: 30rem;
          margin: auto;
          width: 100%;
          min-height: 100vh;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
        `}
      >
        <h2>404 NotFound</h2>
        <p>something...</p>
        <p>something...</p>
        <p>something...</p>
        <Link href={`/`}>
          <a>Home</a>
        </Link>
      </section>
    </Layout>
  );
};

export default Custom404;
