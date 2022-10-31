import {css, cx} from '@emotion/css';
import {useMemo} from 'react';

const SubSidebar = () => {
  const items = useMemo(() => {
    return [
      {
        title: `Sample Feed 1`,
        thumbnailURL: `https://placehold.jp/320x240.png`,
        description: `何もほかとにかくそのお話共として事の中に行きですない。どうも今に注意人もとうていほんの邁進ですですかものきまらていませには希望出たたて、ますますにもしうたですます。地位をやっでものはついすべてをすこぶるたらたで。`,
      },
      {
        title: `Sample Feed 2`,
        thumbnailURL: `https://placehold.jp/320x240.png`,
        description: `何もほかとにかくそのお話共として事の中に行きですない。どうも今に注意人もとうていほんの邁進ですですかものきまらていませには希望出たたて、ますますにもしうたですます。地位をやっでものはついすべてをすこぶるたらたで。`,
      },
      {
        title: `Sample Feed 3`,
        thumbnailURL: `https://placehold.jp/320x240.png`,
        description: `何もほかとにかくそのお話共として事の中に行きですない。どうも今に注意人もとうていほんの邁進ですですかものきまらていませには希望出たたて、ますますにもしうたですます。地位をやっでものはついすべてをすこぶるたらたで。`,
      },
      {
        title: `Sample Feed 4`,
        thumbnailURL: `https://placehold.jp/320x240.png`,
        description: `何もほかとにかくそのお話共として事の中に行きですない。どうも今に注意人もとうていほんの邁進ですですかものきまらていませには希望出たたて、ますますにもしうたですます。地位をやっでものはついすべてをすこぶるたらたで。`,
      },
      {
        title: `Sample Feed 5`,
        thumbnailURL: `https://placehold.jp/320x240.png`,
        description: `何もほかとにかくそのお話共として事の中に行きですない。どうも今に注意人もとうていほんの邁進ですですかものきまらていませには希望出たたて、ますますにもしうたですます。地位をやっでものはついすべてをすこぶるたらたで。`,
      },
      {
        title: `Sample Feed 6`,
        thumbnailURL: `https://placehold.jp/320x240.png`,
        description: `何もほかとにかくそのお話共として事の中に行きですない。どうも今に注意人もとうていほんの邁進ですですかものきまらていませには希望出たたて、ますますにもしうたですます。地位をやっでものはついすべてをすこぶるたらたで。`,
      },
      {
        title: `Sample Feed 7`,
        thumbnailURL: `https://placehold.jp/320x240.png`,
        description: `何もほかとにかくそのお話共として事の中に行きですない。どうも今に注意人もとうていほんの邁進ですですかものきまらていませには希望出たたて、ますますにもしうたですます。地位をやっでものはついすべてをすこぶるたらたで。`,
      },
    ];
  }, []);

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
          ::before {
            content: '';
            position: fixed;
            top: 3rem;
            left: 80px;
            width: 100%;
            height: 3rem;
            background-color: rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(3px);
            z-index: 1;
          }
          ::after {
            content: '';
            position: fixed;
            bottom: 0;
            left: 80px;
            width: 100%;
            height: 3rem;
            background-color: rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(3px);
            z-index: 1;
          }
        `
      )}
    >
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className={`p-2 border-b-2 first-of-type:pt-12 last-of-type:pb-12`}
          >
            <picture>
              <source srcSet={item.thumbnailURL} type={`image/png`} />
              <img
                src={item.thumbnailURL}
                alt={item.title}
                className={css`
                  width: 100%;
                  display: block;
                  object-fit: cover;
                `}
              />
            </picture>
            <h3 className={`font-extrabold`}>{item.title}</h3>
            <p className="font-medium text-gray-500 line-clamp-2">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SubSidebar;
