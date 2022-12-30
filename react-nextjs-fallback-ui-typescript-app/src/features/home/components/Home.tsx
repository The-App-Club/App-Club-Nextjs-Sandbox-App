/** @jsxImportSource @emotion/react */
import NextLink from 'next/link'

import { css } from '@emotion/react'
import { Box, Typography } from '@mui/material'

const HomePage = () => {
  return (
    <Box
      component={`section`}
      css={css`
        max-width: 100%;
        width: 100%;
        padding: 0;
        margin: 6rem auto 0;
      `}
    >
      <Typography
        component={'h1'}
        variant={'h1'}
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        Home
      </Typography>
      <Box
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <NextLink href={'/sample'}>
          <a href={'/sample'}>sample</a>
        </NextLink>
      </Box>
      <Box
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <NextLink href={'/users'}>
          <a href={'/users'}>users</a>
        </NextLink>
      </Box>
    </Box>
  )
}

export default HomePage
