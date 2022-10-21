import Footer from '@/components/Footer';
import Header from '@/components/Header';

const routes = [
  {
    pathName: `/`,
    pageName: `Home`,
    activeMenuName: `Home`,
    header: () => {
      return <Header />;
    },
    footer: () => {
      return <Footer />;
    },
  },
  {
    pathName: `/product`,
    pageName: `Product`,
    activeMenuName: `Product`,
    header: () => {
      return <Header />;
    },
    footer: () => {
      return <Footer />;
    },
  },
  {
    pathName: `/404`,
    pageName: `Custom404`,
    activeMenuName: `Custom404`,
    header: () => {
      return <Header />;
    },
    footer: () => {
      return <Footer />;
    },
  },
  {
    pathName: `/500`,
    pageName: `Custom500`,
    activeMenuName: `Custom500`,
    header: () => {
      return <Header />;
    },
    footer: () => {
      return <Footer />;
    },
  },
];

export {routes};
