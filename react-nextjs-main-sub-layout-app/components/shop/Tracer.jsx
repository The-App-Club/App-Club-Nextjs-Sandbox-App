import {css, cx} from '@emotion/css';

const Tracer = () => {
  return (
    <aside
      className={cx(
        css`
          max-width: 24rem;
          width: 100%;
          position: sticky;
          top: calc(6rem + 3rem);
          z-index: 1;
          min-height: 20rem; // mock attach
          @media (max-width: 1000px) {
            max-width: 100%;
          }
        `,
        `border-2`
      )}
    >
      Shop Tracer
    </aside>
  );
};

export default Tracer;
