import {css, cx} from '@emotion/css';
import Tracer from '@/components/event/Tracer';
import FadeIn from '@/layouts/fadeIn';

const Container = () => {
  return (
    <div
      className={cx(
        css`
          width: 100%;
          max-width: 100%;
          min-height: 100vh;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          @media (max-width: 1000px) {
            min-height: initial;
            flex-direction: column;
          }
        `
      )}
    >
      <div>
        <p>something...</p>
        <p>something...</p>
        <p>something...</p>
        <p>something...</p>
        <p>something...</p>
        <p>something...</p>
        <p>something...</p>
      </div>
      <Tracer />
    </div>
  );
};

export default Container;
