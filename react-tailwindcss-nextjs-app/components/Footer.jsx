import {css, cx} from '@emotion/css';
import Image from 'next/image';
import {BsTwitter} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import {BsPinterest} from 'react-icons/bs';
import {AiOutlineCopyright} from 'react-icons/ai';

import Link from 'next/link';

import {useRouter} from 'next/router';

const Footer = ({className}) => {
  const router = useRouter();

  return (
    <footer
      className={cx(
        css``,
        `w-full bg-white`,
        `text-xl flex justify-center flex-col items-center`,
        `border-t-2 py-2`,
        className
      )}
    >
      <div className="flex items-center gap-1">
        <Image
          alt="logo"
          src={'/assets/logo.png'}
          width={40}
          height={40}
          className={`hover:cursor-pointer`}
          onClick={(e) => {
            router.push('/');
          }}
        />
        <Link href={'/'} className={`flex items-center gap-2`}>
          <a>Make YourSelf</a>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center gap-1">
          <BsTwitter
            size={24}
            className={'hover:cursor-pointer hover:text-blue-400'}
          />
          <FaFacebookF
            size={24}
            className={'hover:cursor-pointer hover:text-blue-900'}
          />
          <AiFillInstagram
            size={24}
            className={'hover:cursor-pointer hover:text-pink-700'}
          />
          <BsPinterest
            size={24}
            className={'hover:cursor-pointer hover:text-red-700'}
          />
        </div>
        <div className="flex items-center">
          <AiOutlineCopyright size={16} />
          <span className="text-sm">Make YourSelf</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
