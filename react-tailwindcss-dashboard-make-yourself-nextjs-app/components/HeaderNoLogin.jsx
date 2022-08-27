import {css, cx} from '@emotion/css';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import 'hamburgers/dist/hamburgers.css';
import {MdAccountCircle} from 'react-icons/md';
import {RiBarChartFill} from 'react-icons/ri';
import {BiTimeFive} from 'react-icons/bi';
import {RiNewspaperLine} from 'react-icons/ri';
import {MdNotificationsNone} from 'react-icons/md';
import {MdSettings} from 'react-icons/md';
import {MdOutlineLogout} from 'react-icons/md';

const Header = () => {
  const router = useRouter();
  return (
    <header
      className={cx(
        css`
          min-height: 3rem;
          z-index: 3;
        `,
        'fixed top-0 w-full flex items-center gap-3 bg-white'
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
            router.push({
              pathname: '/',
            });
          }}
        />
        <Link href={'/'} className={`flex items-center gap-2`}>
          <a>Make YourSelf</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
