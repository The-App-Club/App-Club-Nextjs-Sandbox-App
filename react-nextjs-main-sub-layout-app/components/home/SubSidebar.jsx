import {css, cx} from '@emotion/css';

const SubSidebar = () => {
  return (
    <div
      className={cx(
        'absolute h-full border-r-2 overflow-x-hidden overflow-y-auto',
        css`
          left: 80px;
          width: 240px;
          transition: left 0.4s ease 200ms, width 0.4s ease 200ms;
          @media (max-width: 768px) {
            left: 0;
            width: 0;
            border: none;
          }
        `
      )}
    >
      <h2>Home</h2>
      <h2>Sub</h2>
      <h2>Sidebar</h2>
    </div>
  );
};

export default SubSidebar;
