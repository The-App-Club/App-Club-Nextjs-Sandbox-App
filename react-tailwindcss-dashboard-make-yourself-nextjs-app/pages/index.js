import {css, cx} from '@emotion/css';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {parseCookies} from 'nookies';
import Seo from '../components/Seo';
import {default as Layout} from '../layouts/default';

const Home = ({item, pageURL}) => {
  return (
    <Layout>
      <Seo
        pageTitle={`Welcome to MakeYourSelf Site`}
        pageDescription={`This is MakeYourSelf Site`}
        pageURL={pageURL}
        pageOGPURL={`https://assets.st-note.com/production/uploads/images/81883720/5fd6671f1436ab013249ac749c06443f.png?format=jpg&width=600&crop=16:9&quality=85`}
      />
      <section
        className={cx(
          `max-w-7xl mx-auto w-full relative flex flex-col items-center`,
          css``
        )}
      >
        <h2 className="text-3xl flex items-center justify-center">HomePage</h2>
        <Link href={'/about'} className={`hover:underline`}>
          <a>Go to About</a>
        </Link>
      </section>
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const {req, res, query, resolvedUrl, locales, locale, defaultLocale} = ctx;
  const cookie = parseCookies(ctx);
  if (Object.keys(cookie).length === 0) {
    // https://nextjs.org/docs/api-reference/next.config.js/redirects
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    };
  }
  // console.log('cookie', cookie);
  return {
    props: {
      item: `apple`,
      pageURL: req.headers.referer,
    },
  };
}

export default Home;
