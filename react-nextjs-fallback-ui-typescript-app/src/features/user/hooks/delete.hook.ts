import { useMutation } from '@tanstack/react-query'

import { User } from '@/features/user/domains/user'
import { factory } from '@/features/user/factory'
import useToast from '@/libs/useToast'

const userRepository = factory.userFactory()
const useDeleteUserHook = () => {
  const { successToast, errorToast } = useToast()
  const removeMutation = useMutation(
    async (variables: Pick<User, 'id'>) => {
      return await userRepository.delete({
        id: variables.id,
      })
    },
    {
      onSuccess: (
        data: unknown,
        variables: Pick<User, 'id'>,
        context: void | undefined
      ) => {
        console.log('onSuccess', data)
        successToast('削除しました')
      },
      onError: (
        error: unknown,
        variables: Pick<User, 'id'>,
        context: unknown
      ) => {
        console.log('onError', error)
        errorToast(
          'A system error has occurred. Please contact the administrator. [090-1234-5678]'
        )
      },
      onMutate: (variables: Pick<User, 'id'>) => {
        console.log('onMutate')
      },
      onSettled: (data, error, variables, context) => {
        console.log('onSettled')
      },
    }
  )
  return { removeMutation }
}

export default useDeleteUserHook
