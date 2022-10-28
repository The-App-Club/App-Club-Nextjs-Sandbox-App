import {css} from '@emotion/css';

const Sidebar = () => {
  return (
    <aside
      className={css`
        position: fixed;
        top: 3rem;
        height: calc(100vh - 3rem);
        left: 0;
        width: 320px;
      `}
    >
      <div className="absolute left-[0px] min-w-[80px] h-full border-r-2 overflow-x-hidden overflow-y-auto">
        <h2>Main</h2>
        <h2>Sidebar</h2>
      </div>
      <div className="absolute left-[80px] min-w-[240px] h-full border-r-2 overflow-x-hidden overflow-y-auto">
        <h2>Sub</h2>
        <h2>Sidebar</h2>
      </div>
    </aside>
  );
};

export default Sidebar;
