import { useCallback, useState } from 'react'

import { useRouter } from 'next/router'

import DeleteConfirmDialog from '@/features/user/components/DeleteConfirmDialog'
import useDeleteUserHook from '@/features/user/hooks/delete.hook'
import { USER_KEY, UserData } from '@/features/user/types'
import { queryClient } from '@/libs/queryClient'

const useDeleteConfirmDialog = ({ user }: { user: UserData }) => {
  const router = useRouter()
  const { removeMutation } = useDeleteUserHook()
  const [isOpen, setOpen] = useState<boolean>(false)

  const open = useCallback(() => {
    setOpen(true)
  }, [])

  const close = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setOpen(false)
  }, [])

  const yesDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setOpen(false)
    if (user) {
      removeMutation.mutate({ id: user.id })
      router.push({
        pathname: '/users',
      })
      queryClient.invalidateQueries([USER_KEY])
    }
  }

  const noDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setOpen(false)
  }

  return { isOpen, open, close, yesDelete, noDelete, DeleteConfirmDialog }
}

export default useDeleteConfirmDialog
