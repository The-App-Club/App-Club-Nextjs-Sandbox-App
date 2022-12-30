import { atom } from 'recoil'
import { z } from 'zod'

export const UserFormSchema = z.object({
  id: z.string().nullish(),
  name: z.string().nullish(),
  email: z.string().email().nullish(),
})

export type UserForm = z.infer<typeof UserFormSchema>

const userFormState = atom<UserForm>({
  key: 'userForm',
  default: {
    id: null,
    name: null,
    email: null,
  },
})

export { userFormState }
