/** @jsxImportSource @emotion/react */
import { memo } from 'react'

import { css } from '@emotion/react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import { UserData } from '@/features/user/types'

const DeleteConfirmDialog = ({
  isOpen,
  handleClose,
  handleNo,
  handleYes,
  user,
}: {
  isOpen: boolean
  handleClose: (e: React.MouseEvent<HTMLButtonElement>) => void
  handleNo: (e: React.MouseEvent<HTMLButtonElement>) => void
  handleYes: (e: React.MouseEvent<HTMLButtonElement>) => void
  user: UserData
}): JSX.Element | null => {
  if (!user) {
    return null
  }
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      // onClick={(e) => {
      //   e.stopPropagation()
      // }}
    >
      <DialogTitle
        id='alert-dialog-title'
        css={css`
          font-weight: 700;
          font-size: 1.5rem; /* 24px */
          line-height: 2rem; /* 32px */
        `}
      >
        {'削除確認'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id='alert-dialog-description'
          css={css`
            font-weight: 600;
            font-size: 1rem; /* 16px */
            line-height: 1.5rem; /* 24px */
            color: #6b7280;
          `}
        >
          {`"${user.name}"を削除しますか？この操作は取り消せません。`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant='contained'
          color='info'
          onClick={handleNo}
          autoFocus
          type='button'
        >
          いいえ
        </Button>
        <Button
          variant='contained'
          color='error'
          onClick={handleYes}
          type='button'
        >
          はい
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default memo(DeleteConfirmDialog)
