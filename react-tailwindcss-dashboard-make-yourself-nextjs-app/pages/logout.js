import {css, cx} from '@emotion/css';
import Link from 'next/link';
import {useEffect} from 'react';
import Seo from '../components/Seo';
import {default as Layout} from '../layouts/default';
import {destroyCookie} from 'nookies';
import {useRouter} from 'next/router';

const Logout = ({item, pageURL}) => {
  const router = useRouter();
  useEffect(() => {
    destroyCookie(null, 'jwtToken', {
      maxAge: 365 * 24 * 60 * 60,
      secure: true,
    });
    router.replace('/');
  }, [router]);

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
          LogoutPage
        </h2>
      </section>
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const {req, res, query, resolvedUrl, locales, locale, defaultLocale} = ctx;
  return {
    props: {
      item: `apple`,
      pageURL: req.headers.referer,
    },
  };
}

export default Logout;
