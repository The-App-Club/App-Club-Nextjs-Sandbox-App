/** @jsxImportSource @emotion/react */
import NextLink from 'next/link'

import { css } from '@emotion/react'
import { Box, Button, Typography } from '@mui/material'

import { FallbackDataEmpty } from '@/components/fallback/FallbackDataEmpty'
import { FallbackError } from '@/components/fallback/FallbackError'
import { FallbackErrorFatal } from '@/components/fallback/FallbackErrorFatal'
import { FallbackLoading } from '@/components/fallback/FallbackLoading'
import { FallbackNotAuth } from '@/components/fallback/FallbackNotAuth'
import { FallbackNotFound } from '@/components/fallback/FallbackNotFound'
import { FallbackNotMatch } from '@/components/fallback/FallbackNotMatch'
import Spacer from '@/components/ui/Spacer'

const SamplePage = () => {
  const renderContent = ({
    data,
    error,
  }: {
    data: [] | null | undefined
    error: Error | null | undefined
  }) => {
    if (error) {
      return <FallbackError />
    }

    if (!data) {
      return <FallbackLoading />
    }

    if (data.length === 0) {
      return <FallbackDataEmpty />
    }

    return (
      <Typography component={'h1'} variant={'h1'}>
        Sample
      </Typography>
    )
  }

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
        Sample
      </Typography>
      <Box
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <NextLink href={'/'}>
          <a href={'/'}>Back to home</a>
        </NextLink>
      </Box>
      <FallbackNotMatch />
      <FallbackErrorFatal />
      <FallbackNotAuth />
      {renderContent({ data: [], error: null })}
      {renderContent({ data: undefined, error: null })}
      {renderContent({ data: [], error: null })}
      {renderContent({ data: [], error: new Error('a') })}
      <FallbackNotFound />
      <Spacer />
      <Box
        css={css`
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 0.5rem;
        `}
      >
        <Button variant='contained' color='primary'>
          Sample Button
        </Button>
        <Button variant='contained' color='primary'>
          Add
        </Button>
        <Button variant='contained' color='error'>
          Delete
        </Button>
        <Button variant='contained' color='info'>
          Edit
        </Button>
        <Button variant='contained' color='success'>
          Success
        </Button>
        <Button variant='contained' color='warning'>
          Warning
        </Button>
        <Spacer />
      </Box>
    </Box>
  )
}

export default SamplePage
