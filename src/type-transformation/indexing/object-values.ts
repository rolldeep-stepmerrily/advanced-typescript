import { Equal, Expect } from 'src/helper';

export const Color = {
  Red: 'red',
  Green: 'green',
  Blue: 'blue',
} as const;

type RedGreenBlueValue = (typeof Color)[keyof typeof Color];

type tests = [Expect<Equal<RedGreenBlueValue, 'red' | 'blue' | 'green'>>];
