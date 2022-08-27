import {css, cx} from '@emotion/css';
import Link from 'next/link';
import Seo from '../components/Seo';
import {default as Layout} from '../layouts/default';

const About = ({item, pageURL, notifier}) => {
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
          css`
            min-height: 100vh;
          `
        )}
      >
        <h2 className="text-3xl flex items-center justify-center">AboutPage</h2>
        <Link href={'/'} className={`hover:underline`}>
          <a>Go to Home</a>
        </Link>
      </section>
    </Layout>
  );
};

export function getServerSideProps({
  req,
  res,
  query,
  resolvedUrl,
  locales,
  locale,
  defaultLocale,
}) {
  return {
    props: {
      item: `apple`,
      pageURL: req.headers.referer,
    },
  };
}

export default About;
