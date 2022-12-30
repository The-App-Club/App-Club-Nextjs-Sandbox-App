import { useQuery } from '@tanstack/react-query'

import { factory } from '@/features/user/factory'
import { USER_KEY, UserData } from '@/features/user/types'
import { ErrorData } from '@/types/error'

const userRepository = factory.userFactory()
const useUserIdHook = ({ id }: { id: string }) => {
  const { data, error, refetch } = useQuery<UserData, ErrorData>(
    [USER_KEY, id],
    async () => await userRepository.find({ id }),
    {
      onSuccess: function (data) {
        console.log(`onSuccess`, data)
      },
      onError: function (error) {
        console.log(`onError`, error)
      },
      onSettled: function (data, error) {
        console.log(`onSettled`, data, error)
      },
    }
  )
  return { data, error, refetch }
}

export default useUserIdHook
