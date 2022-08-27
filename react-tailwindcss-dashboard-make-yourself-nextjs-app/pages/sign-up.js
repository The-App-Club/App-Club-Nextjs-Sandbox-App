import {css, cx} from '@emotion/css';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import SignUpForm from '../components/SignUpForm';
import Seo from '../components/Seo';
import {default as Layout} from '../layouts/login';

const SignUp = () => {
  const [pageURL, setPageURL] = useState(null);
  useEffect(() => {
    setPageURL(window.location.href);
  }, []);
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
          SignUpPage
        </h2>
        <SignUpForm />
      </section>
    </Layout>
  );
};

export default SignUp;
