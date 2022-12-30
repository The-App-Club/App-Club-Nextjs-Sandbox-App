/** @jsxImportSource @emotion/react */
import { lazy, Suspense } from 'react'

import { css } from '@emotion/react'
import { Box } from '@mui/material'
import { NextPage } from 'next'

import { default as ErrorBoundary } from '@/components/fallback/ErrorBoundary'
import { FallbackLoading } from '@/components/fallback/FallbackLoading'

const UserCreate = lazy(() => import('@/features/user/components/UserCreate'))

const UserCreatePage: NextPage = () => {
  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <Box
            css={css`
              margin: 6rem auto 0;
              max-width: 100%;
              width: 100%;
              padding: 0;
            `}
          >
            <FallbackLoading />
          </Box>
        }
      >
        <UserCreate />
      </Suspense>
    </ErrorBoundary>
  )
}

export default UserCreatePage
