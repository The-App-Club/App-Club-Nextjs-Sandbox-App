import {css, cx} from '@emotion/css';
import {motion} from 'framer-motion';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {BsShop} from 'react-icons/bs';
import {BsCalendarEvent} from 'react-icons/bs';
import {AiOutlineHome} from 'react-icons/ai';
import {useRecoilState} from 'recoil';

import sidebarState from '@/stores/sidebarStore';

export const attachActiveMenu = ({activeMenuName, menuTitle}) => {
  if (activeMenuName === menuTitle) {
    return `border-blue-900 dark:border-yellow-300`;
  }
  return `border-transparent`;
};

const MenuItem = ({path, menuTitle, icon}) => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [sidebar, setSidebar] = useRecoilState(sidebarState);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  return (
    <motion.li
      className={cx(
        css`
          width: 100%;
          min-height: 3rem;
        `,
        `flex items-center gap-2 pl-2 hover:cursor-pointer`,
        `relative`,
        `border-r-8`,
        `hover:bg-gray-100 dark:hover:bg-slate-800`,
        isClient &&
          attachActiveMenu({activeMenuName: sidebar.activeMenuName, menuTitle})
      )}
      onClick={(e) => {
        setSidebar((prevState) => {
          return {
            activeMenuName: menuTitle,
          };
        });
        router.push({
          pathname: path,
        });
      }}
    >
      {icon()}
      <h2>{menuTitle}</h2>
    </motion.li>
  );
};

const Nav = () => {
  return (
    <motion.nav className="relative w-full">
      <motion.ul
        className={css`
          width: 100%;
          list-style: none;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        `}
      >
        <MenuItem
          path={'/'}
          menuTitle={'Home'}
          icon={() => {
            return <AiOutlineHome size={24} />;
          }}
        />
        <MenuItem
          path={'/shop'}
          menuTitle={'Shop'}
          icon={() => {
            return <BsShop size={24} />;
          }}
        />
        <MenuItem
          path={'/event'}
          menuTitle={'Event'}
          icon={() => {
            return <BsCalendarEvent size={24} />;
          }}
        />
      </motion.ul>
    </motion.nav>
  );
};

export default Nav;
