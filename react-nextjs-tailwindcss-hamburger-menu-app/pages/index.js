import {css} from '@emotion/css';
import Layout from '../layouts/default';

const Home = ({pageName, notifier}) => {
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
        <h2>HomePage</h2>
        <p>something...</p>
        <p>something...</p>
        <p>something...</p>
      </section>
    </Layout>
  );
};

export default Home;
