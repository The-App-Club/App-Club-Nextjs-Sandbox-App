import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Container from '@/components/404/Container';
import SectionHeader from '@/components/404/SectionHeader';
import Sidebar from '@/components/404/Sidebar';
import SidebarSp from '@/components/SidebarSp';
import {css, cx} from '@emotion/css';
import {motion} from 'framer-motion';
const motionConfig = {
  initial: {
    x: -60,
    y: 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  hidden: {
    x: -60,
    y: 0,
    opacity: 0,
  },
};
const Custom404 = () => {
  return (
    <>
      <Sidebar />
      <SidebarSp />
      <motion.section
        className={cx(
          'mt-12',
          css`
            position: absolute;
            top: 0;
            left: 320px;
            max-width: calc(100% - 320px);
            width: 100%;
            min-height: 120vh;
            transition: left 0.4s ease 200ms, max-width 0.4s ease 200ms;
            @media (max-width: 768px) {
              left: 0;
              max-width: 100%;
            }
          `
        )}
        initial={'initial'}
        animate={'animate'}
        exit={'hidden'}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
        }}
        variants={motionConfig}
        onAnimationStart={(e) => {}}
        onAnimationComplete={(e) => {}}
      >
        <SectionHeader />
        <Container />
      </motion.section>
    </>
  );
};

export default Custom404;
