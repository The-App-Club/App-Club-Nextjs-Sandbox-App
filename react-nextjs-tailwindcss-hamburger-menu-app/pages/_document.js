import {Html, Head, Main, NextScript} from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head />
      <body className="scrollbar-none dark:bg-slate-700 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default Document;
