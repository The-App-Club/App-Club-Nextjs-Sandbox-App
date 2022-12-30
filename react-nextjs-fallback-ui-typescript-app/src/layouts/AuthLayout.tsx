/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Container } from '@mui/material'

type LayoutProps = Required<{
  readonly children: React.ReactNode
}>

export const AuthLayout = ({ children }: LayoutProps) => {
  const renderContent = () => {
    return children
  }

  return (
    <Container
      component={'main'}
      css={css`
        position: relative;
        max-width: 100% !important;
        width: 100% !important;
        margin: 0 auto !important;
        padding: 0 !important;
        display: grid;
        grid-template-rows: 1fr auto;
        grid-template-columns: 100%;
        min-height: 100vh;
        overflow: hidden;
      `}
    >
      {renderContent()}
    </Container>
  )
}
