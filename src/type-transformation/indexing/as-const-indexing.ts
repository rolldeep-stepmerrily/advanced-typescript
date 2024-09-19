import { Equal, Expect } from 'src/helper';

export const Color = {
  Red: 'red',
  Green: 'green',
  Blue: 'blue',
} as const;

type RedAndBlue = (typeof Color)['Red' | 'Blue'];

type tests = [Expect<Equal<RedAndBlue, 'red' | 'blue'>>];
