import {css, cx} from '@emotion/css';
import {ControlledMenu, MenuItem} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import {useRouter} from 'next/router';
import {useRef, useState} from 'react';
import {MdOutlineNotificationsNone} from 'react-icons/md';

const Notification = ({menuData}) => {
  const router = useRouter();
  const menuDomRef = useRef(null);
  const [isOpen, setOpen] = useState(false);
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
      <MdOutlineNotificationsNone size={32} />
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

export default Notification;
