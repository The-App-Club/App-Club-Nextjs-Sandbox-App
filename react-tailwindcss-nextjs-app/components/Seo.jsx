import Head from 'next/head';

const Seo = ({
  pageTitle = `Welcome To Make YourSelf`,
  pageDescription = `This is Welcome to Make YourSelf`,
  pageURL,
  pageOGPURL,
}) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
      />
      <meta name="description" content={pageDescription} />
      <meta property="og:url" content={pageURL} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:site_name" content={`Make YourSelf`} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:local" content="ja_JP" />
      <meta property="og:image" content={pageOGPURL} />
      <link rel="canonical" href={pageURL} />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon-precomposed" href="/assets/logo.png" />
    </Head>
  );
};

export default Seo;
