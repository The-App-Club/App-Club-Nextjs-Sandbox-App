/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Box, Button, Divider, Typography } from '@mui/material'

import Spacer from '@/components/ui/Spacer'
import { User } from '@/features/user/domains/user'
import useDeleteConfirmDialog from '@/features/user/hooks/useDeleteConfirmDialog'

const Profile = ({ data }: { data: User }) => {
  const {
    isOpen,
    open: openDialog,
    close,
    yesDelete,
    noDelete,
    DeleteConfirmDialog,
  } = useDeleteConfirmDialog({
    user: data,
  })

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    openDialog()
  }

  return (
    <>
      <DeleteConfirmDialog
        isOpen={isOpen}
        handleClose={close}
        handleNo={noDelete}
        handleYes={yesDelete}
        user={data}
      />
      <Box
        css={css`
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;
          gap: 0.5rem;
        `}
      >
        <Typography paragraph>{`id: ${data.id}`}</Typography>
        <Typography paragraph>{`name: ${data.name}`}</Typography>
        <Typography paragraph>{`email: ${data.email}`}</Typography>
      </Box>
      <Spacer />
      <Divider />
      <Spacer />
      <Button
        variant='contained'
        color='error'
        fullWidth
        onClick={handleDelete}
        type='button'
      >
        削除する
      </Button>
    </>
  )
}

export default Profile
