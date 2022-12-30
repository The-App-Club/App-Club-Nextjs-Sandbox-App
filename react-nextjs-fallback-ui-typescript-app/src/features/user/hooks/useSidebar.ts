import { useRecoilValue, useSetRecoilState } from 'recoil'

import { sidebarState } from '@/features/user/stores/sidebar'

const useSidebar = () => {
  const setSidebar = useSetRecoilState(sidebarState)

  const activeSidebar = useRecoilValue(sidebarState)

  return {
    setSidebar,
    activeSidebar,
  }
}

export default useSidebar
