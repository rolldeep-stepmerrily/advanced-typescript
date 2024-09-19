import { Equal, Expect } from 'src/helper';

export const Color = {
  Red: 'red',
  Green: 'green',
  Blue: 'blue',
} as const;

type Red = (typeof Color)['Red'];
type Green = (typeof Color)['Green'];
type Blue = (typeof Color)['Blue'];

type tests = [Expect<Equal<Red, 'red'>>, Expect<Equal<Green, 'green'>>, Expect<Equal<Blue, 'blue'>>];

type ColorType = keyof typeof Color;

type tests2 = [Expect<Equal<ColorType, 'Red' | 'Green' | 'Blue'>>];
