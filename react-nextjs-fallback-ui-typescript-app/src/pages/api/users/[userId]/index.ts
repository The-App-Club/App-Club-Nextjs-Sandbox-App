import { Chance } from 'chance'
import nextConnect from 'next-connect'

import { User } from '@/features/user/domains/user'
import { UserData } from '@/features/user/types'
import { axios } from '@/libs/axios'
import { BackendResponse } from '@/types/response'

import type { NextApiRequest, NextApiResponse } from 'next'

const handler = nextConnect<NextApiRequest, NextApiResponse>().get(
  async (req, res) => {
    const { userId } = req.query
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
          res.status(response.status).json({
            data: items.find((item) => {
              return item.id === userId
            }),
          })
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
          res.status(response.status).json({
            data: items.find((item) => {
              return item?.id === userId
            }),
          })
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
)

export default handler
