import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

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
      const path = join(process.cwd(), 'public', 'data', 'users.json')
      const original = readFileSync(path, {
        encoding: 'utf-8',
      })
      const oldUsers: User[] = JSON.parse(original)
      const newUser: User = req.body
      const newUsers = oldUsers.map((item) => {
        if (item.id === newUser.id) {
          return newUser
        }
        return item
      })
      writeFileSync(path, JSON.stringify(newUsers, null, 2), {
        flag: 'w',
      })
      res.status(200).json({ data: req.body })
    } else {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT_BASE_URL}/user/update`,
        JSON.stringify(req.body),
        {
          method: 'put',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      if (response.status === 200) {
        const item: UserData = response.data
        res.status(response.status).json({
          data: item,
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
