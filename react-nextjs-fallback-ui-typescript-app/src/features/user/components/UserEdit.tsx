/** @jsxImportSource @emotion/react */
import NextLink from 'next/link'

import { css } from '@emotion/react'
import { Box, Divider, Typography } from '@mui/material'

import Spacer from '@/components/ui/Spacer'
import EditForm from '@/features/user/components/EditForm'

const UserEditPage = () => {
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
        Edit User
      </Typography>
      <Spacer />
      <Divider />
      <Spacer />
      <EditForm />
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

export default UserEditPage
