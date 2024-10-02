import { Equal, Expect } from 'src/helper';

interface FruitMap {
  apple: 'red';
  banana: 'yellow';
  orange: 'orange';
}

type TransformedFruit = {
  [K in keyof FruitMap]: `${K}:${FruitMap[K]}`;
}[keyof FruitMap];

type tests = [Expect<Equal<TransformedFruit, 'apple:red' | 'banana:yellow' | 'orange:orange'>>];
