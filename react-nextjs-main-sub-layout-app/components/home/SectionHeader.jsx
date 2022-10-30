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
      <h2 className="">Home Section Header</h2>
      <button className="px-6 py-2 bg-blue-500 hover:bg-blue-700 rounded-lg text-white h-[2.5rem]">
        Save
      </button>
    </div>
  );
};

export default SectionHeader;
