import { Chance } from 'chance'

import { User } from '@/features/user/domains/user'
import { UserData } from '@/features/user/types'
import { axios } from '@/libs/axios'
import { BackendResponse } from '@/types/response'

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (
      process.env.NODE_ENV === 'development' &&
      Number(process.env.NEXT_PUBLIC_ENABLE_RANDOM_ERROR)
    ) {
      const isError = Chance().integer({ min: 0, max: 1 })
      if (isError) {
        throw new Error('Cowboy Bebop')
      }
    }

    if (process.env.NODE_ENV === 'development') {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT_BASE_URL}/data/users.json`
      )
      if (response.status === 200) {
        const items = (await response.json()) as User[]
        res.status(response.status).json({ data: items })
      } else {
        const item = (await response.json()) as BackendResponse
        res.status(response.status).json({
          data: item,
        })
      }
    } else {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT_BASE_URL}/users`,
        {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      if (response.status === 200) {
        const items: UserData[] = response.data
        res.status(response.status).json({ data: items })
      } else {
        const item: BackendResponse = response.data
        res.status(response.status).json({
          data: item,
        })
      }
    }
  } catch (error: any) {
    res.status(500).json({
      data: {
        message: error?.message,
      } as BackendResponse,
    })
  }
}
