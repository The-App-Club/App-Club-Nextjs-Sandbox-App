/** @jsxImportSource @emotion/react */
import { useRouter } from 'next/router'

import { css } from '@emotion/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button } from '@mui/material'
import { useForm } from 'react-hook-form'

import BebopTextField from '@/components/ui/BebopTextField'
import Spacer from '@/components/ui/Spacer'
import useCreateUserHook from '@/features/user/hooks/create.hook'
import { UserForm, UserFormSchema } from '@/features/user/stores/userForm'
import { USER_KEY } from '@/features/user/types'
import { queryClient } from '@/libs/queryClient'

const CreateForm = () => {
  const router = useRouter()
  const { addMutation } = useCreateUserHook()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({ resolver: zodResolver(UserFormSchema) })

  const onSubmit = (data: any) => {
    setError('Do submit', {
      message: 'Thank you submit!',
      type: 'disabled',
    })
    addMutation.mutate(data as UserForm)
    router.push({
      pathname: '/users',
    })
    queryClient.invalidateQueries([USER_KEY])
  }

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
        name={'name'}
        labelName={`お名前`}
        toolTipDescription={`お名前の入力欄になります`}
        required
        defaultValue={``}
        register={register}
        errors={errors}
      />
      <Spacer />
      <BebopTextField
        name={'email'}
        labelName={`メールアドレス`}
        toolTipDescription={`メールアドレスの入力欄になります`}
        required
        defaultValue={``}
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
        登録する
      </Button>
    </Box>
  )
}

export default CreateForm
