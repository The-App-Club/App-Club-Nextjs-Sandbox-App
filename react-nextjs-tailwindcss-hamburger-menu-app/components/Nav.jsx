import Link from 'next/link';
import {css, cx} from '@emotion/css';
import {
  slide as Menu,
  bubble,
  elastic,
  reveal,
  scaleRotate,
  stack,
  fallDown,
  push,
  pushRotate,
  scaleDown,
} from 'react-burger-menu';
import {useEffect, useState} from 'react';

import {useRouter} from 'next/router';

const Nav = ({tik, isRight = false, outerContainerDomRef}) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // console.log(`tik`, open);
    setOpen((open) => {
      if (open) {
        return false;
      }
      return open;
    });
  }, [tik]);

  return (
    <div
      className={css`
        position: relative;
        width: 100%;
        min-height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 768px) {
          display: block;
          justify-content: initial;
          align-items: initial;
        }
        //
        // Burger menu custom styles
        //
        .bm-burger-button {
          position: absolute;
          width: 30px;
          height: 30px;
          top: 12px;
          left: ${isRight ? 'initial' : '8px'};
          right: ${isRight ? '8px' : 'initial'};
          display: none;
          @media (max-width: 768px) {
            display: block;
          }
        }
        // Outline for burger button focus state
        .bm-burger-button button:focus {
          outline: 2px solid #c94e50;
          outline-offset: 8px;
        }
        // Background color for burger bars focus state
        .bm-burger-button {
          button:focus + span {
            span.bm-burger-bars {
              background-color: #c94e50;
            }
          }
        }
        .right .bm-burger-button {
          left: initial;
          right: 36px;
        }
        .bm-burger-bars {
          background: var(--font-color);
        }
        .bm-morph-shape {
          fill: var(--font-color);
        }
        .bm-menu {
          background: var(--menu-background-color);
          a {
            color: var(--font-color);
            &:hover,
            &:focus {
              color: #c94e50;
            }
          }
        }
        .bm-item:focus {
          outline: none;
        }
      `}
    >
      <nav
        className={css`
          /* position: absolute;
          top: 0;
          right: 8px; */
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          @media (max-width: 768px) {
            display: none;
          }
        `}
      >
        <ul
          className={css`
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 3rem;
            a {
              background-color: var(--background-color);
              color: var(--font-color);
            }
          `}
        >
          <li>
            <Link href={`/about`}>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href={`/contact`}>
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href={`/price`}>
              <a>Price</a>
            </Link>
          </li>
        </ul>
      </nav>
      <Menu
        isOpen={open}
        onStateChange={(e) => {
          const outerContainerDom = outerContainerDomRef.current;
          if (e.isOpen) {
            outerContainerDom.classList.add('nav-active');
          } else {
            outerContainerDom.classList.remove('nav-active');
          }
          setOpen(e.isOpen);
        }}
        pageWrapId={'page-wrap'}
        outerContainerId={'outer-container'}
        right={isRight}
      >
        <ul
          className={css`
            width: 100%;
            list-style: none;
            display: flex !important;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 1rem;
            li {
              padding: 1rem 0 1rem 1rem;
              width: 100%;
              :hover {
                cursor: pointer;
                background: var(--menu-hover-background-color);
              }
            }
          `}
        >
          <li
            className={cx(css``, `bm-item`)}
            onClick={(e) => {
              router.push(`/`);
            }}
          >
            <Link href={`/`}>
              <a>Home</a>
            </Link>
          </li>
          <li
            className={cx(css``, `bm-item`)}
            onClick={(e) => {
              router.push(`/about`);
            }}
          >
            <Link href={`/about`}>
              <a>About</a>
            </Link>
          </li>
          <li
            className={cx(css``, `bm-item`)}
            onClick={(e) => {
              router.push(`/contact`);
            }}
          >
            <Link href={`/contact`}>
              <a>Contact</a>
            </Link>
          </li>
          <li
            className={cx(css``, `bm-item`)}
            onClick={(e) => {
              router.push(`/price`);
            }}
          >
            <Link href={`/price`}>
              <a>Price</a>
            </Link>
          </li>
          {[...Array(1).keys()].map((n) => {
            return (
              <li
                key={n}
                className={cx(
                  css`
                    width: 100%;
                    :hover {
                      cursor: pointer;
                    }
                  `,
                  `bm-item`
                )}
                onClick={(e) => {
                  router.push(`/work`);
                }}
              >
                <Link href={`/work`}>
                  <a>work</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </Menu>
    </div>
  );
};

export {Nav};
