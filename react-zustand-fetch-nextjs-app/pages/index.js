import {css} from '@emotion/css';
import {useEffect} from 'react';
import {Button} from '@chakra-ui/react';
import {default as Grid} from '../components/Grid';
import useBebop from '../hooks/useBebop';
import Layout from '../layouts/default';

const Home = ({pageName, notifier}) => {
  const {data, setData} = useBebop((state) => {
    return {
      setData: state.setData,
      data: state.data,
    };
  });

  return (
    <Layout pageName={pageName} notifier={notifier}>
      <section
        className={css`
          max-width: 1200px;
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
        <Button
          colorScheme={'blue'}
          onClick={(e) => {
            if (data === null) {
              setData({message: 'bebop'});
            } else {
              console.log(`used cache`);
            }
          }}
        >
          Fetch
        </Button>
        <Grid gutter={`1rem`} data={data} />
        <p>something...</p>
        <p>something...</p>
        <p>something...</p>
      </section>
    </Layout>
  );
};

export default Home;
