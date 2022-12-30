import { User } from '@/features/user/domains/user'
import { UserRepository } from '@/features/user/repository'
import { UserForm } from '@/features/user/stores/userForm'
import { UserData } from '@/features/user/types'

export interface UserFactory {
  listUp(): Promise<UserData[]>
  find({ id }: Pick<User, 'id'>): Promise<UserData>
  create({ user }: { user: Partial<UserForm> }): Promise<UserData>
  update({ user }: { user: Partial<UserForm> }): Promise<UserData>
  delete({ id }: Pick<User, 'id'>): Promise<UserData>
}

export const factory = {
  userFactory: (): UserFactory => {
    return new UserRepository()
  },
}
