import { Equal, Expect } from 'src/helper';

const myFunc = () => {
  return 'hello';
};

type MyFuncReturn = ReturnType<typeof myFunc>; // string

type tests = [Expect<Equal<MyFuncReturn, string>>];
