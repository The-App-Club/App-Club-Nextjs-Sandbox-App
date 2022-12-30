import { QueryClient } from '@tanstack/react-query'

export const generateQueryClient = (): QueryClient => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        networkMode: 'online',
        retry: Number(process.env.NEXT_PUBLIC_ERROR_RETRY_COUNT),
        retryDelay: Number(process.env.NEXT_PUBLIC_ERROR_RETRY_INTERVAL),
      },
      mutations: {},
    },
  })
}

export const queryClient = generateQueryClient()
