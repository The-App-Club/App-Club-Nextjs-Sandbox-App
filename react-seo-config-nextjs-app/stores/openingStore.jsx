import {atom} from 'recoil';

const openingState = atom({
  key: 'openingState',
  default: {
    done: false,
  },
});

export default openingState;
