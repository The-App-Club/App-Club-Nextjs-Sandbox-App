import {css, cx} from '@emotion/css';
import {
  tidy,
  map,
  groupBy,
  summarize,
  sum,
  max,
  min,
  variance,
  n,
  filter,
  distinct,
} from '@tidyjs/tidy';
import {faker} from '@faker-js/faker/locale/ja';
import * as d3 from 'd3';
import Select, {selectClasses} from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import {useState} from 'react';
import {useMemo} from 'react';
import {Box, Typography} from '@mui/joy';
import Spacer from '@/components/Spacer';
import {samples, interpolate, formatHex} from 'culori';
import {
  interpolatePuBuGn,
  interpolateSpectral,
  interpolateTurbo,
  scaleOrdinal,
  scaleSequential,
  schemeTableau10,
} from 'd3';

import {useRecoilState} from 'recoil';
import categoryState from '@/stores/categoryStore';
import {useEffect} from 'react';

const {keys, values} = tidy(
  d3.range(6),
  map((n) => {
    faker.seed(n);
    return {
      productMaterials: tidy(
        d3.range(Number(faker.random.numeric())).map((n) => {
          return faker.commerce.productMaterial();
        }),
        distinct()
      ),
      productName: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
    };
  }),
  groupBy(
    'productMaterials',
    summarize({
      total: sum('price'),
      count: n('price'),
      max: max('price'),
      min: min('price'),
      items: (items) => {
        return items;
      },
    }),
    groupBy.entries()
  )
).reduce(
  (acc, [key, value]) => {
    acc.keys.push(key);
    acc.values.push(...value);
    return acc;
  },
  {keys: [], values: []}
);

const categories = tidy(keys.flat(), distinct());

const Home = () => {
  const [isClient, setIsClient] = useState(false);
  const [filteredCategories, setFilteredCategories] =
    useRecoilState(categoryState);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  const matchedItems = useMemo(() => {
    return tidy(
      values,
      filter((item) => {
        // AND predicate
        return (
          d3.intersection(item.productMaterials, filteredCategories.categories)
            .size === filteredCategories.categories.length
        );
        // OR predicate
        return item.productMaterials.some((d) => {
          return filteredCategories.categories.includes(d);
        });
      }),
      map((item) => {
        return item.items;
      })
    ).flat();
  }, [filteredCategories]);

  const colors = useMemo(() => {
    const tList = samples(categories.length);
    const niceColors = d3
      .scaleLinear()
      .domain(d3.range(categories.length))
      .range(schemeTableau10);
    return categories.map((category, index) => {
      return {
        category,
        t: tList[index],
        color: niceColors(index),
      };
    });
  }, []);

  return (
    <Box component={'div'} className="max-w-sm w-full mx-auto p-2">
      <Box component={'span'} className="flex flex-wrap gap-1">
        {categories.map((item, index) => {
          return (
            <Box
              key={index}
              component={'span'}
              className={cx(
                css`
                  &.active {
                    background-color: ${colors.find((color) => {
                      return color.category === item;
                    }).color};
                  }
                `,
                `text-black text-sm font-bold px-2 py-1 rounded-lg bg-gray-300/50`,
                isClient &&
                  `${filteredCategories.categories.includes(item) && 'active'}`
              )}
              onClick={(e) => {
                e.target.classList.toggle('active');
                setFilteredCategories((prevCategories) => {
                  if ([...prevCategories.categories].includes(item)) {
                    return {
                      categories: [...prevCategories.categories].filter(
                        (prevCategory) => {
                          return prevCategory !== item;
                        }
                      ),
                    };
                  } else {
                    const newCategories = [...prevCategories.categories];
                    newCategories.push(item);
                    return {
                      categories: newCategories,
                    };
                  }
                });
              }}
            >
              {item}
            </Box>
          );
        })}
      </Box>
      <Spacer />
      {isClient && (
        <Box className="flex flex-col gap-4 items-center justify-center px-4">
          {matchedItems.map((item, index) => {
            return (
              <Box key={index} className="min-h-[6rem] w-full border-2 p-2">
                <Typography component={'h3'} className="text-2xl font-bold">
                  {item.productName}
                </Typography>
                <Box component={'span'} className="flex flex-wrap gap-1">
                  {item.productMaterials.map((item, index) => {
                    return (
                      <Box
                        component={'span'}
                        className={cx(
                          css`
                            background-color: ${colors.find((color) => {
                              return color.category === item;
                            }).color};
                          `,
                          'text-black text-sm font-bold px-2 py-1 rounded-lg'
                        )}
                        key={index}
                      >
                        {item}
                      </Box>
                    );
                  })}
                </Box>
                <Box
                  component={'span'}
                  className="text-4xl font-bold text-gray-700 flex justify-end"
                >
                  {item.price}
                </Box>
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default Home;
