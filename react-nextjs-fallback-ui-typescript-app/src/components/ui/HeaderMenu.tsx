/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react'

import NextLink from 'next/link'

import { css } from '@emotion/react'
import { Link } from '@mui/material'

import theme from '@/config/theme'
import useHeaderMenu from '@/libs/useHeaderMenu'
import { HeaderMenu as Menu } from '@/types/headerMenu'

const HeaderMenu = ({ menu }: { menu: Menu }) => {
  // https://nextjs.org/docs/messages/react-hydration-error
  const {
    activeHeaderMenu: { activeName },
  } = useHeaderMenu()
  const [borderBottom, setBorderBottom] = useState<string>(`transparent`)

  useEffect(() => {
    setBorderBottom(
      `${menu.name === activeName ? theme.palette.primary.main : 'transparent'}`
    )
  }, [activeName, menu])

  return (
    <NextLink key={menu.id} href={menu.canonicalURL || menu.url} passHref>
      <Link
        underline='none'
        css={css`
          margin: 1rem 0.5rem;
          display: block;
          color: #000000;
          font-size: 0.875rem; /* 14px */
          line-height: 1.25rem; /* 20px */
          border-bottom: 2px solid ${borderBottom};
        `}
      >
        {menu.name}
      </Link>
    </NextLink>
  )
}

export default HeaderMenu
