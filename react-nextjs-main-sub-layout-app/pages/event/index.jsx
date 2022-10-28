import Container from '@/components/event/Container';
import SectionHeader from '@/components/event/SectionHeader';
import Sidebar from '@/components/event/Sidebar';
import Layout from '@/layouts/default';
import {css, cx} from '@emotion/css';
import {motion} from 'framer-motion';
const motionConfig = {
  initial: {
    x: 0,
    y: 60,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  hidden: {
    x: 0,
    y: 60,
    opacity: 0,
  },
};
const Event = () => {
  return (
    <Layout>
      <Sidebar />
      <motion.section
        className={cx(
          'mt-12',
          css`
            position: relative;
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
    </Layout>
  );
};

export default Event;
