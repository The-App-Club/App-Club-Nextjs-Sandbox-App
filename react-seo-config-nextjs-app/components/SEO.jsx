import {NextSeo} from 'next-seo';

import {seo} from '@/config/seo';

const SEO = ({
  title = `Welcome to make yourself`,
  description = `this is make yourself site`,
  keywords = `Make,Yourself,Welcome`,
}) => {
  return (
    <NextSeo
      title="Using More of Config"
      description="This example uses more of the available config options."
      canonical="https://www.canonical.ie/"
      {...seo}
    />
  );
};

export default SEO;
