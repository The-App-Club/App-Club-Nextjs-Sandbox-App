/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import { Box, IconButton, TextField, Tooltip, Typography } from '@mui/material'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import { Spacer } from '@/components/ui/Spacer'

const BebopTextField = ({
  name = '',
  labelName = '',
  toolTipDescription = '',
  required = false,
  disabled = false,
  defaultValue = '',
  register,
  errors,
  type = 'text',
}: {
  name: string
  labelName: string
  toolTipDescription: string
  required?: boolean
  disabled?: boolean
  defaultValue: string
  register: UseFormRegister<FieldValues>
  errors: any
  type?: string
}) => {
  return (
    <>
      <Box
        css={css`
          width: 100%;
          display: flex;
          align-items: center;
        `}
      >
        <Typography
          component={'div'}
          css={css`
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
          `}
        >
          {labelName}
        </Typography>
        {required && (
          <Typography
            variant='caption'
            css={css`
              font-weight: 700;
              font-size: 12px;
              line-height: 15px;
              color: #f14646;
              margin-left: 12px;
            `}
          >
            {`必須`}
          </Typography>
        )}
        <Tooltip
          title={toolTipDescription}
          placement='top'
          css={css`
            margin-left: 12px;
          `}
        >
          <IconButton
            css={css`
              width: 20px;
              height: 20px;
              background: #d9d9d9;
              :hover {
                background: #c3c3c3;
              }
            `}
          >
            <QuestionMarkIcon
              color='action'
              css={css`
                width: 0.9rem;
                height: 0.9rem;
              `}
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Spacer height='12.5px' />
      <TextField
        id={`${name}-textfield`}
        variant='outlined'
        fullWidth
        type={type}
        disabled={disabled}
        defaultValue={defaultValue}
        {...register(name)}
        error={!!errors[name]}
        helperText={errors[name] ? errors[name].message : ''}
      />
    </>
  )
}

export default BebopTextField
