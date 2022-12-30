/** @jsxImportSource @emotion/react */
import NextLink from 'next/link'

import { css } from '@emotion/react'
import { Box } from '@mui/material'

import { FallbackNotFound } from '@/components/fallback/FallbackNotFound'
import { AuthLayout } from '@/layouts/AuthLayout'

const ErrorPage = () => {
  return (
    <AuthLayout>
      <Box
        component={'section'}
        css={css`
          margin: 6rem auto 0;
          max-width: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
        `}
      >
        <FallbackNotFound />
        <Box>
          <NextLink href={'/'}>
            <a>Back to Home</a>
          </NextLink>
        </Box>
      </Box>
    </AuthLayout>
  )
}

export default ErrorPage
