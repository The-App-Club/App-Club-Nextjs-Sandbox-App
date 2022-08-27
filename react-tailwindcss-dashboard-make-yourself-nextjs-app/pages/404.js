import {css, cx} from '@emotion/css';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import Seo from '../components/Seo';
import {default as Layout} from '../layouts/default';
const Custom404 = ({notifier}) => {
  const [pageURL, setPageURL] = useState(null);

  useEffect(() => {
    setPageURL(window.location.href);
  }, []);

  return (
    <Layout notifier={notifier}>
      <Seo
        pageTitle={`Welcome to MakeYourSelf Site`}
        pageDescription={`This is MakeYourSelf Site`}
        pageURL={pageURL}
        pageOGPURL={`https://assets.st-note.com/production/uploads/images/81883409/cd888356a37aba26a73b116d6e7d61b7.png?format=jpg&width=600&crop=16:9&quality=85`}
      />

      <section
        className={cx(
          `max-w-7xl mx-auto w-full relative flex flex-col items-center`,
          css``
        )}
      >
        <h2 className="text-3xl flex items-center justify-center">
          NotFoundPage
        </h2>
        <Link href={'/'} className={`hover:underline`}>
          <a>Go to Home</a>
        </Link>
      </section>
    </Layout>
  );
};

export default Custom404;
