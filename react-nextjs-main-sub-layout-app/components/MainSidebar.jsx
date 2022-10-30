import {css, cx} from '@emotion/css';
import {useRouter} from 'next/router';
import {BsShop} from 'react-icons/bs';
import {BsCalendarEvent} from 'react-icons/bs';
import {AiOutlineHome} from 'react-icons/ai';
import sidebarState from '@/stores/sidebarStore';
import {useRecoilState} from 'recoil';
import {useEffect, useState} from 'react';
import {attachActiveMenu} from '@/components/Nav';

const MenuItem = ({path, menuTitle, icon}) => {
  const router = useRouter();
  const [sidebar, setSidebar] = useRecoilState(sidebarState);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  return (
    <div
      className={cx(
        'flex items-center flex-col gap-1 p-2',
        `border-r-8`,
        `hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-800`,
        isClient &&
          attachActiveMenu({activeMenuName: sidebar.activeMenuName, menuTitle})
      )}
      onClick={(e) => {
        router.push({
          pathname: path,
        });
      }}
    >
      {icon()}
      <h4>{menuTitle}</h4>
    </div>
  );
};

const MainSidebar = () => {
  const router = useRouter();
  return (
    <div
      className={cx(
        'absolute left-[0px] h-full border-r-2 overflow-x-hidden overflow-y-auto flex flex-col',
        css`
          width: 80px;
          transition: width 0.4s ease 200ms;
          @media (max-width: 768px) {
            width: 0;
            border: none;
          }
        `
      )}
    >
      <MenuItem
        path={`/`}
        menuTitle={`Home`}
        icon={() => {
          return <AiOutlineHome size={24} />;
        }}
      />
      <MenuItem
        path={`/shop`}
        menuTitle={`Shop`}
        icon={() => {
          return <BsShop size={24} />;
        }}
      />
      <MenuItem
        path={`/event`}
        menuTitle={`Event`}
        icon={() => {
          return <BsCalendarEvent size={24} />;
        }}
      />
    </div>
  );
};

export default MainSidebar;
