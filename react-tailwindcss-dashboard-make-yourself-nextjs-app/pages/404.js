import {css, cx} from '@emotion/css';
import Link from 'next/link';
import {parseCookies} from 'nookies';
import {useEffect, useState} from 'react';
import Seo from '../components/Seo';
import {default as Layout} from '../layouts/default';
import {useRouter} from 'next/router';

const Custom404 = () => {
  const [pageURL, setPageURL] = useState(null);
  const router = useRouter();
  const cookie = parseCookies();

  useEffect(() => {
    setPageURL(window.location.href);
    if (Object.keys(cookie).length === 0) {
      // https://nextjs.org/docs/api-reference/next.config.js/redirects
      router.replace('/login');
    }
  }, [router, cookie]);

  return (
    <Layout>
      <Seo
        pageTitle={`Welcome to MakeYourSelf Site`}
        pageDescription={`This is MakeYourSelf Site`}
        pageURL={pageURL}
        pageOGPURL={`https://assets.st-note.com/production/uploads/images/81883409/cd888356a37aba26a73b116d6e7d61b7.png?format=jpg&width=600&crop=16:9&quality=85`}
      />

      <section
        className={cx(
          `max-w-7xl mx-auto w-full relative flex flex-col items-center`,
          css`
            min-height: 100vh;
          `
        )}
      >
        <h2 className="text-3xl flex items-center justify-center">
          NotFoundPage
        </h2>
        <Link href={'/'}>
          <a className={`hover:underline`}>Go to Home</a>
        </Link>
      </section>
    </Layout>
  );
};

export default Custom404;
