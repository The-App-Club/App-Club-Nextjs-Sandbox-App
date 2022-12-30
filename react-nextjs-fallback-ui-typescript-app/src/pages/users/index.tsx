/** @jsxImportSource @emotion/react */
import { lazy, Suspense } from 'react'

import { css } from '@emotion/react'
import { Box } from '@mui/material'
import { NextPage } from 'next'

import { default as ErrorBoundary } from '@/components/fallback/ErrorBoundary'
import { FallbackLoading } from '@/components/fallback/FallbackLoading'
import { AuthLayout } from '@/layouts/AuthLayout'

const Users = lazy(() => import('@/features/user/components/Users'))

const UsersPage: NextPage = () => {
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
        <AuthLayout>
          <Users />
        </AuthLayout>
      </Suspense>
    </ErrorBoundary>
  )
}

export default UsersPage
