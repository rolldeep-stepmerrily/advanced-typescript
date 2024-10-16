import { Equal, Expect } from 'src/helper';
import { expect, it } from 'vitest';

const array = [
  {
    name: 'rolldeep',
  },
  {
    name: 'stepmerrily',
  },
];

// recude에 <Record<string,{ name: string }>> 이 타입을 제네릭으로 처리해주면 해결됨.
// reduce의 accum obj 뒤에 as <Record<string,{ name: string }>>를 붙혀도 같음.
const obj = array.reduce<Record<string, { name: string }>>((accum, item) => {
  accum[item.name] = item;
  return accum;
}, {});

it('Should resolve to an object where name is the key', () => {
  expect(obj).toEqual({
    rolldeep: {
      name: 'rolldeep',
    },
    stepmerrily: {
      name: 'stepmerrily',
    },
  });

  type tests = [Expect<Equal<typeof obj, Record<string, { name: string }>>>];
});
