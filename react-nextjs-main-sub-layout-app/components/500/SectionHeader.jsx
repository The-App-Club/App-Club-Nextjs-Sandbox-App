import {css, cx} from '@emotion/css';

const SectionHeader = () => {
  return (
    <div
      className={cx(
        'sticky top-[3rem] w-full min-h-[3rem] flex justify-between items-center bg-white shadow-md z-10',
        css`
          position: sticky;
          z-index: 3;
        `
      )}
    >
      <h2 className="">500 Section Header</h2>
    </div>
  );
};

export default SectionHeader;
