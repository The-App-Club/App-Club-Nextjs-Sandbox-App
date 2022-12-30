/** @jsxImportSource @emotion/react */
import { useCallback, useMemo } from 'react'

import { useRouter } from 'next/router'

import { css } from '@emotion/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button } from '@mui/material'
import { useForm } from 'react-hook-form'

import BebopTextField from '@/components/ui/BebopTextField'
import Spacer from '@/components/ui/Spacer'
import useUpdateUserHook from '@/features/user/hooks/update.hook'
import useSidebar from '@/features/user/hooks/useSidebar'
import { UserForm, UserFormSchema } from '@/features/user/stores/userForm'
import { USER_KEY } from '@/features/user/types'
import { queryClient } from '@/libs/queryClient'
import { merge } from '@/utils/mergeUtil'

const EditForm = () => {
  const router = useRouter()
  const { editMutation } = useUpdateUserHook()
  const { activeSidebar } = useSidebar()
  const { activeUser } = useMemo(() => {
    return { ...activeSidebar }
  }, [activeSidebar])
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({ resolver: zodResolver(UserFormSchema) })

  const onSubmit = useCallback(
    (data: any) => {
      if (!activeUser) {
        return
      }
      setError('Do submit', {
        message: 'Thank you submit!',
        type: 'disabled',
      })
      const willPostedData = merge({ id: activeUser.id }, data)
      editMutation.mutate(willPostedData as UserForm)
      router.push({
        pathname: '/users',
      })
      queryClient.invalidateQueries([USER_KEY])
    },
    [activeUser, editMutation, setError, router]
  )

  return (
    <Box
      component={'form'}
      css={css`
        max-width: 100%;
        width: 100%;
      `}
      onSubmit={handleSubmit(onSubmit)}
    >
      <BebopTextField
        name={'id'}
        labelName={`ID`}
        toolTipDescription={`IDになります`}
        required
        disabled={true}
        defaultValue={`${activeUser?.id || ''}`}
        register={register}
        errors={errors}
      />
      <Spacer />
      <BebopTextField
        name={'name'}
        labelName={`お名前`}
        toolTipDescription={`お名前の入力欄になります`}
        required
        defaultValue={`${activeUser?.name || ''}`}
        register={register}
        errors={errors}
      />
      <Spacer />
      <BebopTextField
        name={'email'}
        labelName={`メールアドレス`}
        toolTipDescription={`メールアドレスの入力欄になります`}
        required
        defaultValue={`${activeUser?.email || ''}`}
        register={register}
        errors={errors}
        type={'email'}
      />
      <Spacer />
      <Button
        fullWidth
        variant='contained'
        color='primary'
        type='submit'
        disabled={!isValid}
      >
        更新する
      </Button>
    </Box>
  )
}

export default EditForm
