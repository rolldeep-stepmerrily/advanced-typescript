import { Equal, Expect } from 'src/helper';

interface Values {
  email: string;
  firstName: string;
  lastName: string;
}

type ValuesAsUnionOfTuples = {
  [K in keyof Values]: [K, Values[K]];
}[keyof Values];

type tests = [Expect<Equal<ValuesAsUnionOfTuples, ['email', string] | ['firstName', string] | ['lastName', string]>>];
