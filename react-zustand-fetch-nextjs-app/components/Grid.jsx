import {
  createRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {css, cx} from '@emotion/css';
import gsap from 'gsap';
import Image from 'next/image';
import {default as chance} from 'chance';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Grid = ({gutter = `1rem`, data}) => {
  const gridItemsDomRef = useMemo(() => {
    return data?.map((item) => {
      return createRef();
    });
  }, [data]);

  const handleResize = (e) => {
    // console.log(e);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={cx(
        css`
          padding: ${gutter};
          column-count: 7;
          column-gap: ${gutter};
          @media (max-width: 1400px) {
            column-count: 6;
            column-gap: ${gutter};
          }
          @media (max-width: 1200px) {
            column-count: 5;
            column-gap: ${gutter};
          }
          @media (max-width: 900px) {
            column-count: 4;
            column-gap: ${gutter};
          }
          @media (max-width: 768px) {
            column-count: 3;
            column-gap: ${gutter};
          }
          @media (max-width: 500px) {
            column-count: 2;
            column-gap: ${gutter};
          }
          > div {
            padding-bottom: ${gutter};
          }
        `,
        ``
      )}
    >
      {data?.map((item, index) => {
        // https://stackoverflow.com/a/67748589/15972569
        // https://dev.to/tanahmed/next-image-make-image-fill-available-space-272o
        return (
          <div
            key={index}
            className={css`
              position: relative;
              width: 100%;
              height: 100%;
              > span {
                position: unset !important;
              }
            `}
          >
            <div
              ref={gridItemsDomRef[index]}
              className={css`
                &.loaded {
                  opacity: 0;
                  visibility: hidden;
                  display: none;
                }
              `}
            >
              <SkeletonTheme
                baseColor="#F1F1F1"
                highlightColor="#F9F9F9"
                key={index}
              >
                <Skeleton
                  className={cx(css``, `grid-item-skelton`)}
                  width={150}
                  height={chance().integer({min: 100, max: 300})}
                />
              </SkeletonTheme>
            </div>
            <Image
              className={css`
                object-fit: contain;
                width: 100% !important;
                position: relative !important;
                height: unset !important;
                opacity: 0;
                visibility: hidden;
                display: none;
              `}
              layout="fill"
              src={item.url}
              alt=""
              loading="lazy"
              onLoad={(e) => {
                const skeltonDom = gridItemsDomRef[index].current;
                const dom = e.currentTarget;
                console.log(`loaded`);
                setTimeout(() => {
                  skeltonDom.classList.add('loaded');
                  dom.style.opacity = 1;
                  dom.style.visibility = `visible`;
                  dom.style.display = `block`;
                }, 300);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
export default Grid;
