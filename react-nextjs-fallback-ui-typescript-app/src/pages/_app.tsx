import '@/styles/index.scss'
import { useCallback, useEffect } from 'react'

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import { EmotionCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { QueryClientProvider } from '@tanstack/react-query'
import NextNProgress from 'nextjs-progressbar'
import { Toaster } from 'react-hot-toast'
import { RecoilRoot } from 'recoil'

import Header from '@/components/ui/Header'
import createEmotionCache from '@/config/createEmotionCache'
import { sealLog } from '@/config/log'
import { matchedActivePage } from '@/config/routes'
import theme from '@/config/theme'
import { queryClient } from '@/libs/queryClient'
import useHeaderMenu from '@/libs/useHeaderMenu'

sealLog()

interface AWAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp = ({
  Component,
  pageProps,
  emotionCache = createEmotionCache(),
}: AWAppProps) => {
  const router = useRouter()
  const { setHeaderMenu } = useHeaderMenu()

  const handleRouteChangeStart = useCallback(
    (e: string) => {
      const matchedItem = matchedActivePage(e)
      if (matchedItem) {
        setHeaderMenu({
          activeName: matchedItem.headerMenuName,
        })
      } else {
        setHeaderMenu({
          activeName: null,
        })
      }
    },
    [setHeaderMenu]
  )

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeStart)
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
    }
  }, [handleRouteChangeStart, router])

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CacheProvider value={emotionCache}>
          <Toaster position='bottom-left' reverseOrder={false} />
          <CssBaseline />
          <Header />
          <Component {...pageProps} />
        </CacheProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

const AWApp = (props: AWAppProps) => {
  return (
    <RecoilRoot>
      <NextNProgress
        color={`#4338ca`}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <MyApp {...props} />
    </RecoilRoot>
  )
}

export default AWApp
