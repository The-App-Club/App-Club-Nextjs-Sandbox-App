import { AxiosResponse, isAxiosError } from 'axios'

import { User } from '@/features/user/domains/user'
import { UserFactory } from '@/features/user/factory'
import { UserForm } from '@/features/user/stores/userForm'
import { UserData } from '@/features/user/types'
import { axios } from '@/libs/axios'
import { ErrorData } from '@/types/error'

export class UserRepository implements UserFactory {
  async delete({ id }: Pick<User, 'id'>): Promise<UserData> {
    const response: AxiosResponse<UserData, ErrorData> = await axios.delete(
      `/api/user/delete`,
      {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({ id }),
      }
    )
    const { data } = response
    return data
  }
  async update({ user }: { user: Partial<UserForm> }): Promise<UserData> {
    const response: AxiosResponse<UserData, ErrorData> = await axios.post(
      `/api/user/update`,
      JSON.stringify(user),
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const { data } = response
    return data
  }
  async create({ user }: { user: Partial<UserForm> }): Promise<UserData> {
    const response: AxiosResponse<UserData, ErrorData> = await axios.post(
      `/api/user/create`,
      JSON.stringify(user),
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const { data } = response
    return data
  }
  async listUp(): Promise<UserData[]> {
    try {
      const response: AxiosResponse<UserData[], ErrorData> = await axios.get(
        '/api/users'
      )
      const { data } = response
      return data
    } catch (error) {
      if (isAxiosError(error)) {
        throw error
      }
      throw error
    }
  }
  async find({ id }: Pick<User, 'id'>): Promise<UserData> {
    try {
      const response: AxiosResponse<UserData, ErrorData> = await axios.get(
        `/api/users/${id}`
      )
      const { data } = response
      return data
    } catch (error) {
      if (isAxiosError(error)) {
        throw error
      }
      throw error
    }
  }
}
