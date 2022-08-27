import {atom} from 'recoil';

const sidebarMenuPositionState = atom({
  key: 'sidebarMenuPosition',
  default: {
    x: 0,
    y: 0,
    text: '',
    hovering: false,
  },
});

export {sidebarMenuPositionState};
