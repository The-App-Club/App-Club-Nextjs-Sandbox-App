import { useState } from 'react'

import Hamburger from '@/components/ui/Hamburger'

const useHamburger = () => {
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
    Hamburger,
  }
}

export default useHamburger
