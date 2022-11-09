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
  const [category, setCategory] = useState(null);

  const matchedItems = useMemo(() => {
    return tidy(
      values,
      filter((item) => {
        return item.productMaterials.includes(category);
      }),
      map((item) => {
        return item.items;
      })
    ).flat();
  }, [category]);

  const colors = useMemo(() => {
    const tList = samples(categories.length);
    const niceColors = d3
      .scaleLinear()
      .domain(d3.range(categories.length))
      .range(schemeTableau10);
    console.log(niceColors);
    return categories.map((category, index) => {
      return {
        category,
        t: tList[index],
        color: niceColors(index),
      };
    });
  }, []);

  console.log(colors);
  return (
    <div className="max-w-sm w-full mx-auto p-2">
      <Select
        placeholder="Select a category..."
        indicator={<KeyboardArrowDown />}
        onChange={(e, v) => {
          setCategory(v);
        }}
        className={cx(
          css`
            width: 100%;
            & .${selectClasses.indicator} {
              transition: 0.2s;
              &.${selectClasses.expanded} {
                transform: rotate(-180deg);
              }
            }
          `
        )}
      >
        {categories.map((key, index) => {
          return (
            <Option value={key} key={index}>
              {key}
            </Option>
          );
        })}
      </Select>
      <Spacer />
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
    </div>
  );
};

export default Home;
