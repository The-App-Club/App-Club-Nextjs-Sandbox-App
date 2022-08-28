import {css, cx} from '@emotion/css';
import {motion} from 'framer-motion';
import {memo, useCallback, useEffect, useRef, useState} from 'react';
import {useDebouncedCallback} from 'use-debounce';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import Header from '../components/Header';
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
  const mainDomRef = useRef();
  const [isTrigger, setIsTrigger] = useState(false);
  const [opened, setOpened] = useState(false);
  const [sidebarOverflowXHidden, setSidebarOverflowXHidden] = useState(false);
  const [sidebarMinWidth, setSidebarMinWidth] = useState(null);
  const [sidebarMaxWidth, setSidebarMaxWidth] = useState(null);
  const doAutoCloseSideBar = useCallback((e) => {
    setOpened(false);
  }, []);
  const handleClick = useCallback((e) => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      setSidebarOverflowXHidden(true);
    }
    setOpened((opened) => {
      return !opened;
    });
    setIsTrigger(true);
  }, []);
  const doneSidebarAction = useCallback(() => {
    if (!window.matchMedia('(max-width: 768px)').matches) {
      return;
    }
    if (opened) {
      setSidebarOverflowXHidden(true);
    } else {
      setSidebarOverflowXHidden(false);
    }
  }, [opened]);

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
      <Header opened={opened} handleClick={handleClick} />
      <div
        className={`pt-12 flex flex-1 w-full h-full relative ${
          sidebarOverflowXHidden ? 'overflow-x-hidden' : ''
        }`}
      >
        <Sidebar
          opened={opened}
          setOpened={setOpened}
          isTrigger={isTrigger}
          setIsTrigger={setIsTrigger}
          handleClick={handleClick}
          sidebarMinWidth={sidebarMinWidth}
          sidebarMaxWidth={sidebarMaxWidth}
          doneSidebarAction={doneSidebarAction}
        />
        <SidebarTooltip
          opened={opened}
          sidebarMinWidth={sidebarMinWidth}
          sidebarMaxWidth={sidebarMaxWidth}
        />
        <main
          ref={mainDomRef}
          className={css`
            --sidebar-width: ${opened ? sidebarMaxWidth : sidebarMinWidth}px;
            position: absolute;
            left: var(--sidebar-width);
            width: calc(100% - var(--sidebar-width));
            transition: left 0.2s ease ${opened ? 0 : 250}ms,
              width 0.2s ease ${opened ? 0 : 250}ms;
          `}
        >
          <Breadcrumbs
            className={cx(
              css`
                position: sticky;
                top: 3rem;
                z-index: 2;
              `,
              `w-full pl-2 bg-white`
            )}
          />
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
              <Footer />
            </motion.div>
          </article>
        </main>
      </div>
    </div>
  );
};

export default memo(Layout);
