import { Equal, Expect } from 'src/helper';

const rgb = ['red', 'green', 'blue'] as const;

type RedAndBlue = (typeof rgb)[0 | 1];

type RGB = (typeof rgb)[number];

type tests = [Expect<Equal<RedAndBlue, 'red' | 'green'>>, Expect<Equal<RGB, 'red' | 'green' | 'blue'>>];
