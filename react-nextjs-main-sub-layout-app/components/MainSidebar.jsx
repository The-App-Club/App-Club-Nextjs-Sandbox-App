import {css, cx} from '@emotion/css';
import {useRouter} from 'next/router';
import {BsShop} from 'react-icons/bs';
import {BsCalendarEvent} from 'react-icons/bs';
import {AiOutlineHome} from 'react-icons/ai';

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
      <div
        className="flex items-center flex-col gap-1 hover:cursor-pointer hover:bg-gray-100 p-2"
        onClick={(e) => {
          router.push({
            pathname: `/`,
          });
        }}
      >
        <AiOutlineHome size={24} />
        <h4>Home</h4>
      </div>
      <div
        className="flex items-center flex-col gap-1 hover:cursor-pointer hover:bg-gray-100 p-2"
        onClick={(e) => {
          router.push({
            pathname: `/shop`,
          });
        }}
      >
        <BsShop size={24} />
        <h4>Shop</h4>
      </div>
      <div
        className="flex items-center flex-col gap-1 hover:cursor-pointer hover:bg-gray-100 p-2"
        onClick={(e) => {
          router.push({
            pathname: `/event`,
          });
        }}
      >
        <BsCalendarEvent size={24} />
        <h4>Event</h4>
      </div>
    </div>
  );
};

export default MainSidebar;
