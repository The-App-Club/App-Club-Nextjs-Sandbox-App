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
const {keys, values} = tidy(
  d3.range(30),
  map((n) => {
    faker.seed(n);
    return {
      productMaterial: faker.commerce.productMaterial(),
      productName: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
    };
  }),
  groupBy(
    'productMaterial',
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

console.log(keys, values);

const Home = () => {
  const [category, setCategory] = useState(null);

  const matchedItems = useMemo(() => {
    return tidy(
      values,
      filter((item) => {
        return item.productMaterial === category;
      }),
      map((item) => {
        return item.items;
      })
    ).flat();
  }, [category]);

  console.log(matchedItems);
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
        {keys.map((key, index) => {
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
            <Box key={index} className="min-h-[6rem] w-full border-2">
              <Typography component={'h3'} className="text-2xl font-bold">
                {item.productName}
              </Typography>
              <Box component={'span'} className="text-sm font-bold">
                {item.productMaterial}
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
