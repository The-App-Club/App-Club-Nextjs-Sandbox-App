import { useState } from 'react'

import AccountMenu from '@/components/ui/AccountMenu'

const useAccountMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  return {
    anchorEl,
    handleOpenMenu,
    handleCloseMenu,
    AccountMenu,
  }
}

export default useAccountMenu
