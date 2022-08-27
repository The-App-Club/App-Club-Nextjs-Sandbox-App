import {css} from '@emotion/css';
import {motion} from 'framer-motion';
import {memo, useCallback, useEffect, useState} from 'react';
import {useDebouncedCallback} from 'use-debounce';
import Footer from '../components/Footer';
import Header from '../components/HeaderNoLogin';
import Sidebar from '../components/Sidebar';
import SidebarTooltip from '../components/SidebarTooltip';

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

const Layout = ({children}) => {
  const [opened, setOpened] = useState(false);
  const [sidebarMinWidth, setSidebarMinWidth] = useState(null);
  const [sidebarMaxWidth, setSidebarMaxWidth] = useState(null);
  const doAutoCloseSideBar = useCallback((e) => {
    setOpened(false);
  }, []);
  const handleResize = useDebouncedCallback((e) => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      setSidebarMinWidth(0);
      setSidebarMaxWidth(window.innerWidth * 0.9);
    } else {
      setSidebarMinWidth(48);
      setSidebarMaxWidth(200);
    }
  }, 600);

  useEffect(() => {
    setSidebarMinWidth(
      window.matchMedia('(max-width: 768px)').matches ? 0 : 48
    );
    setSidebarMaxWidth(
      window.matchMedia('(max-width: 768px)').matches
        ? window.innerWidth * 0.9
        : 200
    );
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <div
      className={css`
        position: relative;
        width: 100%;
        display: grid;
        grid-template-rows: 1fr auto;
        grid-template-columns: 100%;
        min-height: 100vh;
      `}
    >
      <Header />
      <div className={`pt-12 flex flex-1 w-full h-full relative`}>
        <main
          className={css`
            --sidebar-width: ${opened ? sidebarMaxWidth : sidebarMinWidth}px;
            position: absolute;
            left: var(--sidebar-width);
            width: calc(100% - var(--sidebar-width));
            transition: left 0.2s ease ${opened ? 0 : 250}ms,
              width 0.2s ease ${opened ? 0 : 250}ms;
          `}
        >
          <article className="w-full">
            <motion.div
              className={css`
                width: 100%;
                position: relative;
              `}
              initial={'initial'}
              animate={'animate'}
              exit={'hidden'}
              transition={{
                duration: 0.4,
                ease: 'easeInOut',
              }}
              variants={motionConfig}
              onAnimationStart={(e) => {}}
              onAnimationComplete={(e) => {
                doAutoCloseSideBar();
              }}
            >
              {children}
            </motion.div>
          </article>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default memo(Layout);
