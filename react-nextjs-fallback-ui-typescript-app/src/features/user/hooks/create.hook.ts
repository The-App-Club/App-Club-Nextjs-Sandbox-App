import { useMutation } from '@tanstack/react-query'

import { factory } from '@/features/user/factory'
import { UserForm } from '@/features/user/stores/userForm'
import useToast from '@/libs/useToast'
import { createId } from '@/utils/bebopUtil'

const userRepository = factory.userFactory()
const useCreateUserHook = () => {
  const { successToast, errorToast } = useToast()
  const addMutation = useMutation(
    async (variables: UserForm) => {
      return await userRepository.create({
        user: { id: createId(), ...variables },
      })
    },
    {
      onSuccess: (
        data: unknown,
        variables: UserForm,
        context: void | undefined
      ) => {
        console.log('onSuccess', data)
        successToast('登録しました')
      },
      onError: (error: unknown, variables: UserForm, context: unknown) => {
        console.log('onError', error)
        errorToast(
          'A system error has occurred. Please contact the administrator. [090-1234-5678]'
        )
      },
      onMutate: (variables: UserForm) => {
        console.log('onMutate')
      },
      onSettled: (data, error, variables, context) => {
        console.log('onSettled')
      },
    }
  )
  return { addMutation }
}

export default useCreateUserHook
