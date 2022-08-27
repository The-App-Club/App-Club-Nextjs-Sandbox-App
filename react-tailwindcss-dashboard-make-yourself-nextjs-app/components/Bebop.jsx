import {css} from '@emotion/css';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {useDebouncedCallback} from 'use-debounce';

const BebopContext = createContext({
  isTrigger,
  setIsTrigger,
  opened,
  setOpened,
  sidebarOverflowXHidden,
  setSidebarOverflowXHidden,
  sidebarMinWidth,
  setSidebarMinWidth,
  sidebarMaxWidth,
  setSidebarMaxWidth,
  doAutoCloseSideBar,
  handleClick,
  doneSidebarAction,
});

const useBebop = () => {
  return useContext(BebopContext);
};

const Bebop = ({children}) => {
  const [isTrigger, setIsTrigger] = useState(false);
  const [opened, setOpened] = useState(false);
  const [sidebarOverflowXHidden, setSidebarOverflowXHidden] = useState(false);
  const [sidebarMinWidth, setSidebarMinWidth] = useState(
    window.matchMedia('(max-width: 768px)').matches ? 0 : 48
  );
  const [sidebarMaxWidth, setSidebarMaxWidth] = useState(
    window.matchMedia('(max-width: 768px)').matches
      ? window.innerWidth * 0.9
      : 200
  );
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
      <BebopContext.Provider value={value}>{children}</BebopContext.Provider>
    </div>
  );
};

export default Bebop;
