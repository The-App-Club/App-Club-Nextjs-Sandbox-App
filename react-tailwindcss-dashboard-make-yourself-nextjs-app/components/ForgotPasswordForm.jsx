import {css, cx} from '@emotion/css';
import {BsEye} from 'react-icons/bs';
import {BsEyeSlash} from 'react-icons/bs';
import {useEffect, useMemo, useRef, useState} from 'react';
import {useRouter} from 'next/router';
import {setCookie} from 'nookies';
import * as yup from 'yup';
import YupPassword from 'yup-password';

import Layout from '../layouts/popup';
import Loading from './Loading';
import Spacer from './Spacer';
import Message from './Message';
import Link from 'next/link';

YupPassword(yup);

const ForgotPasswordForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(null);
  const [showEmailSuccessMessage, setShowEmailSuccessMessage] = useState(null);
  const [showEmailErrorMessage, setShowEmailErrorMessage] = useState(null);

  const emailRef = useRef(null);

  const emailChecker = useMemo(() => {
    return yup.string().email().required();
  }, []);

  const passwordChecker = useMemo(() => {
    // https://github.com/knicola/yup-password/blob/master/index.js#L91-L99
    return yup.string().password().required();
  }, []);

  const handleSubmit = async (e) => {
    // validation... like yup
    const email = emailRef.current.value;
    let correctEmail = null;
    try {
      const resultEmailCheck = await emailChecker.validate(email);
      correctEmail = resultEmailCheck;
    } catch (error) {
      setShowEmailErrorMessage(error.message);
      return;
    }
    if (!correctEmail) {
      return;
    }
    // console.log(`correctEmail`, correctEmail);
    setLoading(true);
    setDisabled(true);
    setTimeout(() => {
      setShowSuccessMessage('Nice work!');
      setLoading(false);
      // do generate jwtToken on backend, then set the jwtToken on frontend
      // setCookie(null, 'jwtToken', 'hogehoge', {
      //   maxAge: 365 * 24 * 60 * 60,
      //   secure: true,
      // });
      // setTimeout(() => {
      //   router.replace('/');
      // }, 3000);
    }, 200);
  };

  const yesYouCan = async () => {
    const email = emailRef.current.value;
    try {
      await emailChecker.validate(email);
      if (showSuccessMessage) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    } catch (error) {
      setDisabled(true);
    }
  };

  const handleChangeEmail = async (e) => {
    const email = emailRef.current.value;
    try {
      await emailChecker.validate(email);
      setShowEmailErrorMessage('');
      setShowEmailSuccessMessage('Great Email!');
      await yesYouCan();
    } catch (error) {
      setShowEmailErrorMessage(error.message);
      setShowEmailSuccessMessage('');
      setDisabled(true);
      return;
    }
  };

  useEffect(() => {
    setDisabled(true);
  }, [showSuccessMessage]);

  const renderMessage = ({
    successMessage,
    errorMessage,
    infoMessage,
    initialMessage,
  }) => {
    if (successMessage) {
      return <Message message={successMessage} type={'success'} />;
    } else if (errorMessage) {
      return <Message message={errorMessage} type={'danger'} />;
    } else if (infoMessage) {
      return <Message message={infoMessage} type={'info'} />;
    } else {
      return <Spacer height="2.5rem" />;
    }
  };

  return (
    <form
      className={css`
        width: 100%;
        max-width: 18rem;
      `}
      onSubmit={(e) => {
        e.preventDefault();
        return false;
      }}
    >
      <div className="mb-2">
        <label
          htmlFor="email"
          className="block pb-2 text-lg font-medium text-gray-900"
        >
          Your email
        </label>
        <p className="text-gray-600 text-sm font-medium pb-2">
          We&apos;ll never share your email with anyone else.
        </p>
        <input
          type="email"
          id="email"
          className={cx(
            css``,
            'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none mb-2',
            `${
              showEmailErrorMessage
                ? 'focus:ring-red-500 focus:border-red-500'
                : 'focus:ring-blue-500 focus:border-blue-500'
            }`
          )}
          placeholder="sample@example.com"
          ref={emailRef}
          onChange={handleChangeEmail}
          onBlur={handleChangeEmail}
        />
        {renderMessage({
          successMessage: showEmailSuccessMessage,
          errorMessage: showEmailErrorMessage,
          initialMessage: '',
        })}
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        disabled={disabled}
        className={cx(
          css`
            position: relative;
            width: 100%;
          `,
          'text-white bg-blue-700 font-medium rounded-lg text-sm px-6 py-2 text-center',
          `focus:ring-4 focus:outline-none focus:ring-blue-300`,
          `hover:bg-blue-800 hover:cursor-pointer`,
          `disabled:bg-slate-700 disabled:opacity-60`
        )}
      >
        {`Send Email`}
        {loading ? (
          <Loading
            className={css`
              position: absolute;
              top: 5px;
              right: 2px;
            `}
          />
        ) : null}
      </button>
      <Spacer height="0.5rem" />
      {renderMessage({
        infoMessage: showSuccessMessage,
        initialMessage: '',
      })}
      <Link href={'/login'}>
        <a className={`hover:underline inline-block mt-4`}>
          Already have an account?
        </a>
      </Link>
    </form>
  );
};

export default ForgotPasswordForm;
