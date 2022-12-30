import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

import { UserData } from '@/features/user/types'

const { persistAtom } = recoilPersist()

type Sidebar = {
  activeUser: UserData
}

const sidebarState = atom<Sidebar>({
  key: 'userSidebar',
  default: {
    activeUser: null,
  },
  effects_UNSTABLE: [persistAtom],
})

export { sidebarState }
