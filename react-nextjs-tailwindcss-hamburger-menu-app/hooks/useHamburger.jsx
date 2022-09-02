import {useCallback, useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import hamburgerState from '../stores/hamburgerStore';

const useHamburger = () => {
  const [hamburger, setHamburger] = useRecoilState(hamburgerState);

  const [isTrigger, setIsTrigger] = useState(false);
  const [opened, setOpened] = useState(false);

  const doAutoCloseSideBar = useCallback((e) => {
    setOpened(false);
  }, []);

  const handleClick = useCallback((e) => {
    setOpened((opened) => {
      return !opened;
    });
    setIsTrigger(true);
  }, []);

  return {
    isTrigger,
    setIsTrigger,
    opened,
    setOpened,
    handleClick,
    doAutoCloseSideBar,
  };
};

export {useHamburger};
