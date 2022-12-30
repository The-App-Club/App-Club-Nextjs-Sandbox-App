/** @jsxImportSource @emotion/react */
import { memo } from 'react'

import NextLink from 'next/link'

import { css } from '@emotion/react'
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material'

import { accountMenus as menus } from '@/config/accountMenu'

export type StatusType = 'authenticated' | 'loading' | 'unauthenticated'

const AccountMenu = ({
  anchorEl,
  handleOpenMenu,
  handleCloseMenu,
}: {
  anchorEl: HTMLElement | null
  handleOpenMenu: (event: React.MouseEvent<HTMLElement>) => void
  handleCloseMenu: VoidFunction
}) => {
  const handleLogout = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <Box>
      <IconButton
        disableRipple
        onClick={handleOpenMenu}
        css={css`
          padding: 0;
        `}
      >
        <Avatar src={`/assets/profile.png`} alt='User' />
      </IconButton>
      <Menu
        id='account-menu'
        css={css`
          margin-top: 45px;
        `}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
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
        <Divider />
        <MenuItem onClick={handleLogout}>
          <Typography textAlign='center'>ログアウト</Typography>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default memo(AccountMenu)
