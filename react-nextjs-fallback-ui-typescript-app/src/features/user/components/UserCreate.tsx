/** @jsxImportSource @emotion/react */
import NextLink from 'next/link'

import { css } from '@emotion/react'
import { Box, Divider, Typography } from '@mui/material'

import Spacer from '@/components/ui/Spacer'
import CreateForm from '@/features/user/components/CreateForm'

const UserCreatePage = () => {
  return (
    <Box
      component={`section`}
      css={css`
        margin: 6rem auto 0;
        max-width: 20rem;
        width: 100%;
        padding: 0;
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
        Create User
      </Typography>
      <Spacer />
      <Divider />
      <Spacer />
      <CreateForm />
      <Spacer />
      <Box
        css={css`
          display: flex;
          justify-content: flex-end;
        `}
      >
        <NextLink href={'/users'}>
          <a href={'/users'}>Back to Users</a>
        </NextLink>
      </Box>
    </Box>
  )
}

export default UserCreatePage
