import {css, cx} from '@emotion/css';

const Tracer = () => {
  return (
    <aside
      className={cx(
        css`
          max-width: 24rem;
          width: 100%;
          position: sticky;
          top: 6rem;
          z-index: 1;
          min-height: 20rem; // mock attach
          @media (max-width: 1000px) {
            max-width: 100%;
          }
        `,
        `border-2`
      )}
    >
      Tracer
    </aside>
  );
};

export default Tracer;
