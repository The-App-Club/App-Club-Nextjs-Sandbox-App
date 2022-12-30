/** @jsxImportSource @emotion/react */
import NextLink from 'next/link'

import { css } from '@emotion/react'
import { AppBar, Box, Link, Toolbar } from '@mui/material'

import Logo from '@/components/icon/Logo'
import HeaderMenu from '@/components/ui/HeaderMenu'
import { headerMenus as menus } from '@/config/headerMenus'
import useAccountMenu from '@/libs/useAccountMenu'
import useHamburger from '@/libs/useHamburger'
import { HeaderMenu as Menu } from '@/types/headerMenu'

export const Header = () => {
  const { Hamburger, anchorEl, handleCloseMenu, handleOpenMenu } =
    useHamburger()
  const {
    AccountMenu,
    anchorEl: anchorElAccount,
    handleCloseMenu: handleCloseMenuAccount,
    handleOpenMenu: handleOpenMenuAccount,
  } = useAccountMenu()
  return (
    <AppBar
      position='fixed'
      elevation={0}
      color={'inherit'}
      css={css`
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
          0 4px 6px -4px rgb(0 0 0 / 0.1); // shadow-lg
      `}
    >
      <Toolbar
        disableGutters
        css={css`
          padding: 0 24px;
          min-height: 64px !important;
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <Hamburger
          anchorEl={anchorEl}
          handleCloseMenu={handleCloseMenu}
          handleOpenMenu={handleOpenMenu}
        />
        <NextLink href={'/'} passHref>
          <Link
            css={css`
              margin-right: 1rem;
              display: flex;
              align-items: center;
              @media (max-width: 920px) {
                display: none;
              }
            `}
          >
            <Logo width={40} height={40} />
          </Link>
        </NextLink>
        <Box
          css={css`
            display: flex;
            align-items: center;
            flex: 1;
            @media (max-width: 920px) {
              display: none;
            }
          `}
        >
          {menus.map((menu: Menu, index: number) => {
            return <HeaderMenu key={index} menu={menu} />
          })}
        </Box>
        <AccountMenu
          anchorEl={anchorElAccount}
          handleCloseMenu={handleCloseMenuAccount}
          handleOpenMenu={handleOpenMenuAccount}
        />
      </Toolbar>
    </AppBar>
  )
}
export default Header
