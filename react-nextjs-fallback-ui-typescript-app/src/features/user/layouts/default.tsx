/** @jsxImportSource @emotion/react */
import { ClassNamesArg, css } from '@emotion/react'
import { Box } from '@mui/material'
import { motion } from 'framer-motion'

type Props = {
  children?: React.ReactNode
  className?: ClassNamesArg
}

const motionConfig = {
  initial: {
    x: 0,
    y: 20,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  hide: {
    x: 0,
    y: 20,
    opacity: 0,
  },
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  className = css`
    margin: 6rem auto 0;
    max-width: 30rem;
    width: 100%;
    padding: 0;
  `,
}) => {
  return (
    <Box
      component={motion.section}
      variants={motionConfig}
      initial={'initial'}
      animate={'animate'}
      exit={'hide'}
      transition={{
        duration: 0.4,
        ease: 'easeInOut',
      }}
      css={className}
      onAnimationStart={(e) => {}}
      onAnimationComplete={(e) => {}}
    >
      {children}
    </Box>
  )
}

export default Layout
