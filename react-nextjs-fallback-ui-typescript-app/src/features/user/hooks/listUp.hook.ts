import { useQuery } from '@tanstack/react-query'

import { factory } from '@/features/user/factory'
import { USER_KEY, UserData } from '@/features/user/types'
import { ErrorData } from '@/types/error'

const userRepository = factory.userFactory()
const useUserListUpHook = () => {
  // https://stackoverflow.com/a/63113066/15972569
  const { data, error, refetch } = useQuery<UserData[], ErrorData>(
    [USER_KEY],
    async () => await userRepository.listUp(),
    {
      onSuccess: function (data) {
        console.log(`onSuccess`)
      },
      onError: function (error) {
        console.log(`onError`)
      },
      onSettled: function (data, error) {
        console.log(`onSettled`)
      },
    }
  )
  return { data, error, refetch }
}

export default useUserListUpHook
