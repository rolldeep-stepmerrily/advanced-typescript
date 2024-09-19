import { Equal, Expect } from 'src/helper';

export const fakeDataDefaults = {
  foo: 'bar',
  bar: 123,
  baz: true,
};

type FakeDataType = typeof fakeDataDefaults;

export type FooType = FakeDataType['foo'];
export type BarType = FakeDataType['bar'];
export type BazType = FakeDataType['baz'];

type tests = [Expect<Equal<FooType, string>>, Expect<Equal<BarType, number>>, Expect<Equal<BazType, boolean>>];
