import {createContext, useContext} from 'react';

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

export {BebopContext, useBebop};
