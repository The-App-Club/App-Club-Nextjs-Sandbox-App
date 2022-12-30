/** @jsxImportSource @emotion/react */
import { useCallback } from 'react'

import NextLink from 'next/link'
import { useRouter } from 'next/router'

import { css } from '@emotion/react'
import { Box, Button, Divider, Typography } from '@mui/material'

import { FallbackError } from '@/components/fallback/FallbackError'
import { FallbackLoading } from '@/components/fallback/FallbackLoading'
import Spacer from '@/components/ui/Spacer'
import Profile from '@/features/user/components/Profile'
import useUserIdHook from '@/features/user/hooks/id.hook'
import useSidebar from '@/features/user/hooks/useSidebar'
import { USER_KEY, UserData } from '@/features/user/types'
import { queryClient } from '@/libs/queryClient'
import { ErrorData } from '@/types/error'

const UserPage = () => {
  const { setSidebar } = useSidebar()
  const router = useRouter()
  const { userId } = router.query
  const { data, error, refetch } = useUserIdHook({ id: userId as string })
  const renderContent = ({
    data,
    error,
  }: {
    data: UserData | null | undefined
    error: ErrorData
  }) => {
    if (error) {
      return (
        <FallbackError
          message={error.message}
          iconSize={40}
          refetch={() => {
            queryClient.removeQueries([USER_KEY, userId])
            refetch()
          }}
        />
      )
    }

    if (!data) {
      return <FallbackLoading />
    }

    return <Profile data={data} />
  }

  const handleEdit = useCallback(
    (e: React.MouseEvent) => {
      if (!data) {
        return
      }
      setSidebar((prevState) => {
        return {
          ...prevState,
          activeUser: data,
        }
      })
      router.push({
        pathname: '/user/edit',
      })
    },
    [data, setSidebar, router]
  )

  return (
    <Box
      component={`section`}
      css={css`
        margin: 6rem auto 0;
        max-width: 30rem;
        width: 100%;
        padding: 0;
      `}
    >
      <Box
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <NextLink href={'/users'}>
          <a href={'/users'}>Back to Users</a>
        </NextLink>
        <Typography
          component={'h1'}
          variant={'h1'}
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          Focused User
        </Typography>
        <Button
          variant='contained'
          color='primary'
          onClick={handleEdit}
          type='button'
        >
          編集する
        </Button>
      </Box>
      <Spacer />
      <Divider />
      <Spacer />
      {renderContent({ data, error })}
    </Box>
  )
}

export default UserPage
