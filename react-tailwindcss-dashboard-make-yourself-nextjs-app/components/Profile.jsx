import {css, cx} from '@emotion/css';
import {ControlledMenu, MenuItem} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {useRef, useState} from 'react';
import {MdOutlineAccountCircle} from 'react-icons/md';

const Profile = ({menuData}) => {
  const menuDomRef = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const router = useRouter();

  // https://szhsin.github.io/react-menu#classname-prop
  const menuItemClassName = ({hover}) => {
    return hover
      ? cx(
          css`
            padding: 0.375rem 0.5rem 0.375rem 0.5rem;
          `,
          `border-l-2 border-transparent`,
          `hover:border-blue-900 hover:bg-gray-100 hover:cursor-pointer`,
          `flex items-center gap-2`,
          `my-menuitem-hover`
        )
      : cx(
          css`
            padding: 0.375rem 0.5rem 0.375rem 0.5rem;
          `,
          `border-l-2 border-transparent`,
          `flex items-center gap-2`
        );
  };
  return (
    <div
      ref={menuDomRef}
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        :hover {
          cursor: pointer;
        }
      `}
      onClick={(e) => {
        if (!isOpen) {
          setOpen(true);
        }
      }}
    >
      <div className={`w-10 h-10 rounded-full border-2 border-slate-300`}>
        <Image
          alt="profile"
          src={'/assets/profile.png'}
          width={40}
          height={40}
        />
      </div>
      <ControlledMenu
        state={isOpen ? 'open' : 'closed'}
        anchorRef={menuDomRef}
        onMouseLeave={() => {
          setOpen(false);
        }}
        onClose={() => {
          setOpen(false);
        }}
        className={cx(css``)}
      >
        {menuData.map((menuItem, index) => {
          return (
            <MenuItem
              key={index}
              className={menuItemClassName}
              onClick={(e) => {
                router.push({
                  pathname: menuItem.pathname,
                  query: {},
                });
              }}
            >
              {menuItem.icon()}
              <span
                className={css`
                  padding-left: 0.5rem;
                `}
              >
                {menuItem.name}
              </span>
            </MenuItem>
          );
        })}
      </ControlledMenu>
    </div>
  );
};

export default Profile;
