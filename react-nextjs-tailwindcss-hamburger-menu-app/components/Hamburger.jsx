import {css, cx} from '@emotion/css';
import 'hamburgers/dist/hamburgers.css';
import {useEffect, useState} from 'react';
import {useRecoilValue} from 'recoil';
import themeState from '../stores/themeStore';

const decideHamburgerColor = ({mode}) => {
  if (mode === `dark`) {
    return css`
      .hamburger-inner,
      .hamburger-inner::before,
      .hamburger-inner::after,
      .hamburger.is-active .hamburger-inner,
      .hamburger.is-active .hamburger-inner::before,
      .hamburger.is-active .hamburger-inner::after {
        background-color: #fff !important;
      }
    `;
  }

  return css`
    .hamburger-inner,
    .hamburger-inner::before,
    .hamburger-inner::after,
    .hamburger.is-active .hamburger-inner,
    .hamburger.is-active .hamburger-inner::before,
    .hamburger.is-active .hamburger-inner::after {
      background-color: #000 !important;
    }
  `;
};

const Hamburger = ({className, opened, handleClick}) => {
  const {mode} = useRecoilValue(themeState);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  return (
    <div className={cx(css``, className)}>
      <div
        className={cx(
          css`
            z-index: 1;
            width: 32px;
            height: 32px;
          `,
          'relative h-full w-full'
        )}
      >
        <button
          className={cx(
            `hamburger`,
            `hamburger--elastic`,
            `${opened ? 'is-active' : ''}`,
            css`
              padding: 0 !important;
            `
          )}
          type="button"
          aria-label="Menu"
          aria-controls="navigation"
          aria-expanded={opened}
          onClick={handleClick}
        >
          <span
            className={cx(
              css`
                width: 32px;
                height: 32px;
                display: flex;
                justify-content: center;
                align-items: center;
              `,
              'hamburger-box',
              isClient && decideHamburgerColor({mode})
            )}
          >
            <span
              className={cx(
                css`
                  &,
                  ::before,
                  ::after {
                    width: 32px;
                  }
                  & {
                    top: 6px !important;
                  }
                `,
                'hamburger-inner'
              )}
            ></span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hamburger;
