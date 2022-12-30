import { z } from 'zod'

import { UserSchema } from '@/features/user/domains/user'

const UserData = UserSchema.nullish()

export type UserData = z.infer<typeof UserData>

export const USER_KEY = 'user'
