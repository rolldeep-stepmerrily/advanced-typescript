import { Equal, Expect } from 'src/helper';

type GetDataValue<T> = T extends { data: infer T2 } ? T2 : never;

type tests = [
  Expect<Equal<GetDataValue<{ data: 'hello' }>, 'hello'>>,
  Expect<Equal<GetDataValue<{ data: { name: 'hello' } }>, { name: 'hello' }>>,
  Expect<Equal<GetDataValue<{ data: { name: 'hello'; age: 20 } }>, { name: 'hello'; age: 20 }>>,
  Expect<Equal<GetDataValue<string>, never>>,
];
