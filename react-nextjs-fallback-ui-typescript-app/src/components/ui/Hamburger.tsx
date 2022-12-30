/** @jsxImportSource @emotion/react */
import { memo } from 'react'

import NextLink from 'next/link'

import { css } from '@emotion/react'
import MenuIcon from '@mui/icons-material/Menu'
import { Box, IconButton, Menu, MenuItem } from '@mui/material'

import { headerMenus as menus } from '@/config/headerMenus'

const Hamburger = ({
  anchorEl,
  handleOpenMenu,
  handleCloseMenu,
}: {
  anchorEl: HTMLElement | null
  handleOpenMenu: (event: React.MouseEvent<HTMLElement>) => void
  handleCloseMenu: VoidFunction
}) => {
  return (
    <Box
      css={css`
        display: none;
        @media (max-width: 920px) {
          display: block;
        }
      `}
    >
      <IconButton
        disableRipple
        onClick={handleOpenMenu}
        css={css`
          padding: 0;
        `}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id='hamburger-menu'
        css={css`
          margin-top: 45px;
        `}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        closeAfterTransition
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        onBlur={handleCloseMenu} // https://stackoverflow.com/a/72097298/15972569
        disableScrollLock={true}
      >
        {menus.map((menu) => (
          <NextLink key={menu.id} href={menu.canonicalURL || menu.url} passHref>
            <MenuItem>{menu.name}</MenuItem>
          </NextLink>
        ))}
      </Menu>
    </Box>
  )
}

export default memo(Hamburger)
