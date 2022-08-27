import Cookies from 'universal-cookie';
const cookies = new Cookies();
import {atom} from 'recoil';
const authState = atom({
  key: 'auth',
  default: {
    jwtToken: null,
  },
});

export {authState};
