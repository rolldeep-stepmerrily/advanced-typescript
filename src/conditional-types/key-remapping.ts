import { Equal, Expect } from 'src/helper';

interface Example {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
}

type OnlyIdKeys<T> = {
  [K in keyof T as K extends `${string}${'id' | 'Id'}` ? K : never]: T[K];
};

type tests = [
  Expect<Equal<OnlyIdKeys<Example>, { id: string; organisationId: string; groupId: string }>>,
  Expect<Equal<OnlyIdKeys<{}>, {}>>,
];
