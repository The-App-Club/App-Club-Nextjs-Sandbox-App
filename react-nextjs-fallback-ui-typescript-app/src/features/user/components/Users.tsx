/** @jsxImportSource @emotion/react */
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import { css } from '@emotion/react'
import { Box, Button, Divider, Typography } from '@mui/material'
import { Link } from '@mui/material'

import { FallbackDataEmpty } from '@/components/fallback/FallbackDataEmpty'
import { FallbackError } from '@/components/fallback/FallbackError'
import { FallbackLoading } from '@/components/fallback/FallbackLoading'
import Spacer from '@/components/ui/Spacer'
import useUserListUpHook from '@/features/user/hooks/listUp.hook'
import Layout from '@/features/user/layouts/default'
import { USER_KEY, UserData } from '@/features/user/types'
import { queryClient } from '@/libs/queryClient'
import { ErrorData } from '@/types/error'

const UsersPage = () => {
  const router = useRouter()
  const { data, error, refetch } = useUserListUpHook()
  const renderContent = ({
    data,
    error,
  }: {
    data: UserData[] | null | undefined
    error: ErrorData
  }) => {
    if (error) {
      return (
        <FallbackError
          message={error.message}
          iconSize={40}
          refetch={() => {
            queryClient.removeQueries([USER_KEY])
            refetch()
          }}
        />
      )
    }

    if (!data) {
      return <FallbackLoading />
    }

    if (data.length === 0) {
      return <FallbackDataEmpty />
    }

    return (
      <Box
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 0.5rem;
        `}
      >
        {data.map((item, index) => {
          return (
            <NextLink key={item?.id} href={`/users/${item?.id}`} passHref>
              <Link
                css={css`
                  display: block;
                `}
              >
                {item?.name}
              </Link>
            </NextLink>
          )
        })}
      </Box>
    )
  }

  const handleRefresh = (e: React.MouseEvent) => {
    e.stopPropagation()
    // https://stackoverflow.com/questions/65565960/remove-query-from-cache-without-refetching-react-query
    queryClient.removeQueries([USER_KEY])
    refetch()
  }

  const handleAdd = (e: React.MouseEvent) => {
    router.push({
      pathname: '/user/create',
    })
  }

  return (
    <Layout>
      <Box
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <NextLink href={'/'}>
          <a href={'/'}>Back to Home</a>
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
          Users
        </Typography>
        <Button variant='contained' color='primary' onClick={handleAdd}>
          追加する
        </Button>
      </Box>
      <Spacer />
      <Divider />
      <Spacer />
      <Box
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <Button variant='contained' color='primary' onClick={handleRefresh}>
          最新データ取得
        </Button>
      </Box>
      <Spacer />
      {renderContent({ data, error })}
    </Layout>
  )
}

export default UsersPage
