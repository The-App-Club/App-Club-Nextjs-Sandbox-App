import {css, cx} from '@emotion/css';
import Link from 'next/link';
import Button from '@mui/joy/Button';
import TextField from '@mui/joy/TextField';
import Box from '@mui/joy/Box';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import Spacer from '@/components/Spacer';
import {Typography} from '@mui/joy';
import YupPassword from 'yup-password';
YupPassword(yup);
const schema = yup.object({
  email: yup
    .string()
    .email('メールアドレスの形式が不正です')
    .required('必須入力です'),
  password: yup
    .string()
    .min(8, `少なくとも8文字以上です`)
    .max(20, `多くとも20文字以下です`)
    .minLowercase(1, `少なくとも小文字1文字以上を含めてください`)
    .minUppercase(1, `少なくとも大文字1文字以上を含めてください`)
    .minNumbers(1, `少なくとも数字1文字以上を含めてください`)
    .minSymbols(1, `少なくとも記号1文字以上を含めてください`)
    .required(`必須入力です`),
});

const Home = () => {
  // https://web.dev/i18n/ja/sign-in-form-best-practices/
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema), mode: 'all'});
  const doSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <form className="max-w-xs w-full" onSubmit={handleSubmit(doSubmit)}>
        <Typography
          component={'h2'}
          className={cx(`!flex !items-center !justify-center`, `!text-2xl`)}
        >
          ログイン
        </Typography>
        <Box className={`flex items-center flex-col`}>
          <TextField
            type={'email'}
            fullWidth
            id="email"
            name="email"
            label="メールアドレス"
            placeholder="メールアドレスを入力してください"
            // helperText="xxx@yyy.zzz"
            color={errors.email ? 'danger' : 'neutral'}
            {...register('email')}
          />
          {Object.keys(errors).length !== 0 && errors.email ? (
            <Typography
              component={'p'}
              className={cx(
                `!text-sm !flex !items-center !justify-end !w-full !my-1`,
                `!text-red-600`
              )}
            >
              {errors.email.message}
            </Typography>
          ) : (
            <Spacer height="20px" className="my-1" />
          )}
        </Box>
        <Box className={`flex items-center flex-col`}>
          <TextField
            fullWidth
            id="current-password"
            type={'password'}
            autoComplete="current-password"
            name="password"
            label="パスワード"
            placeholder="パスワードを入力してください"
            // helperText="This is a helper text"
            color={errors.password ? 'danger' : 'neutral'}
            {...register('password')}
          />
          {Object.keys(errors).length !== 0 && errors.password ? (
            <Typography
              component={'p'}
              className={cx(
                `!text-sm !flex !items-center !justify-end !w-full !my-1`,
                `!text-red-600`
              )}
            >
              {errors.password.message}
            </Typography>
          ) : (
            <Spacer height="20px" className="my-1" />
          )}
        </Box>
        <Button
          variant="solid"
          type="submit"
          className="flex justify-center items-center w-full"
          disabled={Object.keys(errors).length === 0 ? false : true}
        >
          ログイン
        </Button>
      </form>
    </div>
  );
};

export default Home;
