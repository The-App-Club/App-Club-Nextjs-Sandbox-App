import {atom} from 'recoil';
import {recoilPersist} from 'recoil-persist';
const {persistAtom} = recoilPersist();

const categoryState = atom({
  key: 'categoryState',
  default: {
    categories: [],
  },
  effects_UNSTABLE: [persistAtom],
});

export default categoryState;
